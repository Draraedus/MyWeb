import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login, loginVisit } from "../../data/actions/authActions";
import { auth } from "../../data/services/AuthUserRequest";


import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import styles from "./Login.module.css";

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInUserWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleInputEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handleInputPasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    signInUserWithEmailAndPassword(email, password);
    dispatch(login(email));
  };
  const handleVisitLogin = () => {
    signInUserWithEmailAndPassword("visit@gmail.com", "visitante");
    dispatch(loginVisit());
  }

  if (error) {
    return (
      <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
          <h1 className={styles.loginSiteTittle}>MyWeb</h1>
          <h2 className={styles.loginTittle}>Login de Admin</h2>
          <div className={styles.loginEmail}>
            <label>Email:</label>
            <input type="text" onChange={handleInputEmailChange} />
          </div>
          <div className={styles.loginPassword}>
            <label>Senha:</label>
            <input type="password" onChange={handleInputPasswordChange} />
          </div>
          <p className={styles.messageError}> Email ou senha incorretos.</p>
          <button className={styles.loginButton} onClick={handleLogin}>
            Entrar
          </button>
          <button className={styles.loginVisit}>Entre como visitante</button>
        </div>
      </div>
    );
  } else if (loading) {
    return <p className={styles.errorMessage}>Loading</p>;
  } else if (user) {
    return <Navigate to="/home" />;
  }
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h1 className={styles.loginSiteTittle}>MyWeb</h1>
        <h2 className={styles.loginTittle}>Login de Admin</h2>
        <div className={styles.loginEmail}>
          <label>Email:</label>
          <input type="text" onChange={handleInputEmailChange} />
        </div>
        <div className={styles.loginPassword}>
          <label>Senha:</label>
          <input type="password" onChange={handleInputPasswordChange} />
        </div>
        <button className={styles.loginButton} onClick={handleLogin}>
          Entrar
        </button>
        <button className={styles.loginVisit} onClick={handleVisitLogin}>Entre como visitante</button>
      </div>
    </div>
  );
}

export default Login;
