import { Outlet } from "react-router-dom";
import { Header } from "./partials/header";
import { Sidebar } from "./partials/sidebar";

function DashboardLayout() {
  return (
    <main>
      <Header />
      <section className="flex items-center h-container overflow-y-hidden relative">
        <Sidebar />
        <section className="px-5 pb-5 h-container overflow-y-scroll w-full relative z-10">
          <Outlet />
        </section>
      </section>
    </main>
  );
}

export { DashboardLayout };
