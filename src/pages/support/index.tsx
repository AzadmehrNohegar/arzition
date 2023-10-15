import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SupportListPage = lazy(() => import("./pages/list"));
const SupportCreatePage = lazy(() => import("./pages/create"));

function Support() {
  return (
    <Routes>
      <Route index element={<SupportListPage />} />
      <Route path="create" element={<SupportCreatePage />} />
    </Routes>
  );
}

export default Support;
