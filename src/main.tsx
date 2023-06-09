import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import Providers from "./app/Providers.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
