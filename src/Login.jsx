import { useState } from "react";
import { Redirect, useLocation, withRouter } from "react-router-dom";

const Login = ({ login }) => {
  const { state } = useLocation();
  if (login === true) {
    return <Redirect to={state?.from || "/"} />;
  }
  return <h2>please login to continue </h2>;
};

export default withRouter(Login);
