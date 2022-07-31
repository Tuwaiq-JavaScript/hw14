import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export interface formData {
  name: string;
  email: string;
  password: string;
  gender: string;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
