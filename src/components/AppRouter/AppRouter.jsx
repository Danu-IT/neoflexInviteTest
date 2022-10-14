import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import { privateRoutes } from "../../router";

const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          ></Route>
        );
      })}
      <Route path="/*" element={<HomePage to="/posts" replace />}></Route>
    </Routes>
  )
};

export default AppRouter;
