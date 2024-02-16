import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react"
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SpeedInsights />
    <App />
  </React.StrictMode>
);
