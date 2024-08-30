import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  Link,
} from "@tanstack/react-router";
import React from "react";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const rootRoute = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg border-b">
        <Link to="/" activeProps={{ className: "font-bold" }}>
          Home
        </Link>
        <Link to="/login" activeProps={{ className: "font-bold" }}>
          Login
        </Link>
      </div>
      <Outlet />
    </>
  );
}

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexComponent,
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

function IndexComponent() {
  return (
    <div className="p-2">
      <HomePage />
    </div>
  );
}

const routeTree = rootRoute.addChildren([indexRoute, loginRoute]);

const router = createRouter({
  routeTree,
});

export { router };
