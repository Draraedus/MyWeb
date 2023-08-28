import React from 'react'
import styles from './Login.module.css'

function Login() {
  return (
    <div className="LoginPage">
        <div className="loginContainer">
            <h1 className="loginTittle">Login de Admin</h1>
            <input type="text" className="loginUsername" />
            <label className="loginUsernameLabel">Username:</label>
            <input type="text" className="loginPassword" />
            <label className="loginPasswordLabel">Senha:</label>
            <button className="loginButton">Entrar</button>
            <button className="loginVisit">Entre como visitante</button>
        </div>
    </div>
  )
}

export default Login