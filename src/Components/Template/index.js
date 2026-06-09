import { lazy } from "react";

export const templateMap = {
   1: lazy(() => import("./Template1")),
  2: lazy(() => import("./Template1")), // same layout, different theme
  3: lazy(() => import("./Template1")), // same layout, different theme
  4: lazy(() => import("./Template2")), // different layout when you build it
};