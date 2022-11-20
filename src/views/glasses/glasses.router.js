import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Glasses = lazy(() => import("./components/Glasses"));

function Router() {
  return (
    <Routes>
      <Route path="*" exact={true} element={<Glasses />} />
    </Routes>
  );
}
export default Router;
