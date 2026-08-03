import { useNavigate } from "react-router-dom";

import { ROUTE_PATHS } from "@/constants";
import { useAuthStore } from "@/store/auth.store";
import { Button } from "@/shared/components";



const Header = () => {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate(ROUTE_PATHS.LOGIN, { replace: true });
  };

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-gray-900">
          Content Review Workspace
        </h1>

        <div className="flex items-center gap-4">
          <span className="rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
            {user?.role}
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;