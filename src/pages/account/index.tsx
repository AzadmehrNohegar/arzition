import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const AccountViewPage = lazy(() => import("./pages/view"));
const AccountEditPage = lazy(() => import("./pages/edit"));

function Account() {
  return (
    <Routes>
      <Route index element={<AccountViewPage />} />
      <Route path="edit" element={<AccountEditPage />} />
    </Routes>
  );
}

export default Account;
