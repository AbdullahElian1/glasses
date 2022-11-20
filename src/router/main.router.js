import { lazy } from "react";

const GlassesRouter = lazy(() => import("../views/glasses/glasses.router"));

export const MainRouter = [
  {
    path: "/glasses/*",
    component: GlassesRouter,
  },
];
