import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Github() {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  if (isAuthenticated === false) {
    return <Navigate to="/" />;
  }
  return <div>Meu Github</div>;
}

export default Github;
