import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import i18n from "./i18n";
import App from "./App";
import "./index.css";

function renderApp() {
  const language = i18n.resolvedLanguage || "en";

  document.documentElement.lang = language;
  document.documentElement.dir = language.startsWith("ar") ? "rtl" : "ltr";

  createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
}

if (i18n.isInitialized) {
  renderApp();
} else {
  i18n.on("initialized", renderApp);
}
