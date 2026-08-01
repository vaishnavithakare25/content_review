// import type { ReactNode } from "react";
import type { RouteObject } from "react-router-dom";

import type { Permission, Role } from "@/constants";

export type AppRoute = RouteObject & {
 
  roles?: readonly Role[];
  permissions?: readonly Permission[];
}