import { Navigate, Outlet } from "react-router-dom";

import {
  PERMISSIONS,
  ROLE_PERMISSIONS,
  ROUTE_PATHS,
} from "@/constants";
import { useAuthStore } from "@/store/auth.store";

interface PermissionGuardProps {
  requiredPermissions: readonly (typeof PERMISSIONS)[keyof typeof PERMISSIONS][];
}

const PermissionGuard = ({
  requiredPermissions,
}: PermissionGuardProps) => {
  const role = useAuthStore((state) => state.user?.role);

  if (!role) {
    return <Navigate to={ROUTE_PATHS.LOGIN} replace />;
  }

  const permissions = ROLE_PERMISSIONS[role];

  const hasPermission = requiredPermissions.every((permission) =>
    permissions.includes(permission)
  );

  if (!hasPermission) {
    return <Navigate to={ROUTE_PATHS.FORBIDDEN} replace />;
  }

  return <Outlet />;
};

export default PermissionGuard;