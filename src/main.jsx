import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes/Routes.jsx";
import PortfolioProvider from "./Provider/PortfolioProvider";
import { initTheme } from "./util/theme";
// initialize theme
initTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortfolioProvider>
      <RouterProvider router={routes} />
    </PortfolioProvider>
  </React.StrictMode>
);
