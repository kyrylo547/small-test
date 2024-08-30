import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { AuthServiceProvider } from "../core/AuthServiceProvider";
import { router } from "./routes";
import "./index.css";
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <AuthServiceProvider>
    <RouterProvider router={router} />
  </AuthServiceProvider>
);
