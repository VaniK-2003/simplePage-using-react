import { createRoot } from "react-dom/client";
import "./index.css";
const root = createRoot(document.getElementById("root"));
root.render(
  <div className="card">
    <nav>
      <img
        className="logo"
        src="https://images.seeklogo.com/logo-png/27/2/react-logo-png_seeklogo-273845.png"
        alt="Logo not found"
      />
      <h1 className="header">Rules of JSX</h1>
    </nav>
    <ul className="list">
      <li>Must enclose JSX in a root element</li>
      <li>Close the tags properly</li>
      <li>Use className instead of class</li>
      <li>Use camelCase for attributes</li>
      <li>Use curly braces for JavaScript</li>
    </ul>
  </div>,
);
