import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      {/* Header */}
      {/* Sidebar */}

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;