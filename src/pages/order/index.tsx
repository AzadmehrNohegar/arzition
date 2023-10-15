import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const OrderListPage = lazy(() => import("./pages/list"));
const OrderCreatePage = lazy(() => import("./pages/create"));
const OrderSinglePage = lazy(() => import("./pages/single"));

function Order() {
  return (
    <Routes>
      <Route index element={<OrderListPage />} />
      <Route path="create" element={<OrderCreatePage />} />
      <Route path=":id" element={<OrderSinglePage />} />
    </Routes>
  );
}

export default Order;
