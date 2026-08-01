import { Navigate, Outlet, useLocation } from "react-router-dom";

import { ROUTE_PATHS } from "@/constants";
import { useAuthStore } from "@/store/auth.store";

const ProtectedRoute = () => {
  const location = useLocation();

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  if (!isAuthenticated) {
    return (
      <Navigate
        to={ROUTE_PATHS.LOGIN}
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;