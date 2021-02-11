import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

function ProtectedRoutes({ login, Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return login ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
}

export default ProtectedRoutes;
