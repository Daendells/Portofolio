import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const reducedMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canObserve = () => typeof window !== "undefined" && "IntersectionObserver" in window && !reducedMotion();

// Elements with class "reveal" fade and rise into place the first time they scroll into view.
// Without IntersectionObserver, or with reduced motion, everything is shown at once.
export function RevealOnScroll() {
  const { pathname } = useLocation();
  useEffect(() => {
    const items = document.querySelectorAll(".reveal:not(.is-in)");
    if (!canObserve()) {
      items.forEach((el) => el.classList.add("is-in"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}

// A card that rises into place when it scrolls into view. It observes itself, so cards that appear
// later (after a filter change) still animate. `index` staggers cards in the same row.
export function RevealCard({ index = 0, className = "", children }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(() => !canObserve());

  useEffect(() => {
    if (shown || !ref.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <div
      ref={ref}
      className={`reveal-card ${shown ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      {children}
    </div>
  );
}

// Pointer handlers for a card that leans a few degrees toward the mouse while a soft light follows it.
// Touch and reduced motion get a still card.
export const tilt = {
  onPointerMove(event) {
    if (event.pointerType !== "mouse" || reducedMotion()) return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.setProperty("--rx", `${(0.5 - y) * 5}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 5}deg`);
    el.classList.add("is-tilting");
  },
  onPointerLeave(event) {
    const el = event.currentTarget;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.classList.remove("is-tilting");
  },
};

// A number such as "0.84", "98.5%" or "250" that counts up once when it comes into view.
export function CountUp({ value }) {
  const ref = useRef(null);
  const match = /^([^\d]*)([\d.,]+)(.*)$/.exec(value);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (!match || !canObserve() || !ref.current) return undefined;
    const [, prefix, digits, suffix] = match;
    const target = parseFloat(digits.replace(/,/g, ""));
    const decimals = (digits.split(".")[1] || "").length;
    const format = (n) => `${prefix}${n.toFixed(decimals)}${suffix}`;
    setShown(format(0));
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / 1100, 1);
        setShown(format(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) frame = requestAnimationFrame(step);
        else setShown(value);
      };
      frame = requestAnimationFrame(step);
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // value is a constant string per stat
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span ref={ref}>{shown}</span>;
}
