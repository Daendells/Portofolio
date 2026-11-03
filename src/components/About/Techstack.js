import React from "react";

const STACK = [
  ["Languages", "Python, Go, TypeScript, JavaScript, SQL, HTML, CSS"],
  ["Web and APIs", "FastAPI, Next.js, React, Laravel, Streamlit"],
  ["Machine learning", "PyTorch, TensorFlow, scikit-learn, ONNX Runtime, pandas"],
  ["Data and infrastructure", "PostgreSQL, MySQL, Docker, Git, GitHub Actions, Google Cloud"],
  ["Analysis", "Power BI, Excel, PowerPoint"],
];

function Techstack() {
  return (
    <dl className="fact-list stack-list">
      {STACK.map(([group, tools]) => (
        <div key={group}>
          <dt>{group}</dt>
          <dd>{tools}</dd>
        </div>
      ))}
    </dl>
  );
}

export default Techstack;
