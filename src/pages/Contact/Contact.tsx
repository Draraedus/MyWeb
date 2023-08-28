import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Contact() {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  if (isAuthenticated === false) {
    return <Navigate to="/" />;
  }
  return <div>Meu Contato</div>;
}

export default Contact;
