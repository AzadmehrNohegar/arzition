import { DashboardLayout } from "@/layouts/dashboard";
import { PrivateRoute } from "@/shared/privateRoute";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const DashboardPage = lazy(() => import("./dashboard"));
const WalletPage = lazy(() => import("./wallet"));
const SupportPage = lazy(() => import("./support"));
const OrderPage = lazy(() => import("./order"));
const AccountPage = lazy(() => import("./account"));
const AuthPage = lazy(() => import("./auth"));

function BasePage() {
  return (
    <Routes>
      <Route
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="support/*" element={<SupportPage />} />
        <Route path="order/*" element={<OrderPage />} />
        <Route path="account/*" element={<AccountPage />} />
        <Route path="wallet" element={<WalletPage />} />
        <Route path="service/*" element={<>services</>} />
      </Route>
      <Route path="auth/*" element={<AuthPage />} />
    </Routes>
  );
}

export default BasePage;
