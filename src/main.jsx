import React from "react";
import ReactDOM from "react-dom/client";
import App from "./LoginForm";
import "./LoginForm.css"; // Jika ada file CSS global

// Membuat root DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Merender aplikasi
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
