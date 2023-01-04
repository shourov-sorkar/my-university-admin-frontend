import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routes from "./Route/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.component />}
              />
            )
          );
        })}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
      {/* <div>LoginPage</div> */}
    </BrowserRouter>
  );
}

export default App;
