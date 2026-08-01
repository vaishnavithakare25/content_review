import { Outlet } from "react-router-dom";

import { Header } from "@/shared/components";

const AppLayout = () => {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl p-6">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
