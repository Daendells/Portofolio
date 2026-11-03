import React, { useEffect, useRef } from "react";

// Topographic contour lines drawn with marching squares over slowly drifting value noise.
// The cursor raises a soft hill. Rendering stops when the canvas is off screen or the tab is hidden,
// and visitors who prefer reduced motion get a single still frame.

const CELL = 11; // px between field samples
const LEVELS = 13;
const ACCENT_LEVEL = 8;

function hash(x, y) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

function noise(x, y) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi);
  const b = hash(xi + 1, yi);
  const c = hash(xi, yi + 1);
  const d = hash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

function field(x, y, t, pointer) {
  let value = noise(x * 0.9 + t * 0.05, y * 0.9 - t * 0.03) * 0.65 + noise(x * 2.1 - t * 0.04, y * 2.1 + t * 0.02) * 0.35;
  if (pointer.strength > 0.001) {
    const dx = x - pointer.x;
    const dy = y - pointer.y;
    value += pointer.strength * 0.35 * Math.exp(-(dx * dx + dy * dy) / 0.35);
  }
  return value;
}

// Marching squares: which cell edges (0 top, 1 right, 2 bottom, 3 left) the line joins, indexed by
// corners above the level as bits: top-left 8, top-right 4, bottom-right 2, bottom-left 1.
const SEGMENTS = [[], [[3, 2]], [[2, 1]], [[3, 1]], [[0, 1]], [[3, 0], [2, 1]], [[0, 2]], [[3, 0]],
  [[3, 0]], [[0, 2]], [[3, 2], [0, 1]], [[0, 1]], [[3, 1]], [[2, 1]], [[3, 2]], []];

function draw(ctx, width, height, t, pointer) {
  const cols = Math.ceil(width / CELL) + 1;
  const rows = Math.ceil(height / CELL) + 1;
  const scale = 1 / 170; // px to noise units
  const values = new Float32Array(cols * rows);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      values[j * cols + i] = field(i * CELL * scale, j * CELL * scale, t, pointer);
    }
  }
  ctx.clearRect(0, 0, width, height);
  for (let level = 1; level < LEVELS; level++) {
    const iso = 0.12 + (level / LEVELS) * 0.76;
    ctx.beginPath();
    for (let j = 0; j < rows - 1; j++) {
      for (let i = 0; i < cols - 1; i++) {
        const a = values[j * cols + i];
        const b = values[j * cols + i + 1];
        const c = values[(j + 1) * cols + i + 1];
        const d = values[(j + 1) * cols + i];
        const index = (a > iso ? 8 : 0) | (b > iso ? 4 : 0) | (c > iso ? 2 : 0) | (d > iso ? 1 : 0);
        if (index === 0 || index === 15) continue;
        const x = i * CELL;
        const y = j * CELL;
        const at = (edge) => {
          // 0 top, 1 right, 2 bottom, 3 left; linear interpolation along the edge
          if (edge === 0) return [x + CELL * ((iso - a) / (b - a)), y];
          if (edge === 1) return [x + CELL, y + CELL * ((iso - b) / (c - b))];
          if (edge === 2) return [x + CELL * ((iso - d) / (c - d)), y + CELL];
          return [x, y + CELL * ((iso - a) / (d - a))];
        };
        for (const [e1, e2] of SEGMENTS[index]) {
          const [x1, y1] = at(e1);
          const [x2, y2] = at(e2);
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
        }
      }
    }
    const accent = level === ACCENT_LEVEL;
    ctx.strokeStyle = accent ? "rgba(226, 104, 60, 0.75)" : `rgba(236, 232, 225, ${0.05 + level * 0.008})`;
    ctx.lineWidth = accent ? 1.2 : 1;
    ctx.stroke();
  }
}

function ContourField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas && canvas.getContext && canvas.getContext("2d");
    if (!ctx) return undefined; // jsdom and very old browsers

    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0, strength: 0, target: 0 };
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let last = 0;
    const start = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw(ctx, width, height, 20, pointer);
    };

    const tick = (now) => {
      frame = requestAnimationFrame(tick);
      if (!visible || document.hidden || now - last < 33) return; // about 30 fps is plenty for slow drift
      last = now;
      pointer.strength += (pointer.target - pointer.strength) * 0.06;
      draw(ctx, width, height, 20 + (now - start) / 1000, pointer);
    };

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / 170;
      pointer.y = (event.clientY - rect.top) / 170;
      pointer.target = event.clientY >= rect.top && event.clientY <= rect.bottom ? 1 : 0;
    };

    resize();
    window.addEventListener("resize", resize);
    let observer;
    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
        });
        observer.observe(canvas);
      }
      frame = requestAnimationFrame(tick);
    }
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      if (observer) observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="contour-field" aria-hidden="true" />;
}

export default ContourField;
