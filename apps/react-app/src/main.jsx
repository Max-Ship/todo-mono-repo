import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@styles/index.css";

const rootElement = document.getElementById("App");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
