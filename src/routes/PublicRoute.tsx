import { Navigate, Outlet } from "react-router-dom";

import { ROUTE_PATHS } from "@/constants";
import { useAuthStore } from "@/store/auth.store";

const PublicRoute = () => {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  if (isAuthenticated) {
    return <Navigate to={ROUTE_PATHS.POSTS} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;