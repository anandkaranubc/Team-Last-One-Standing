// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure this path is correct and matches your component file
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App /> {/* Render the AboutUs component */}
  </React.StrictMode>
);
