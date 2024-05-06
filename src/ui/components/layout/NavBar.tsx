import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navbar_container}>
      <Link to="/" className={styles.navbar_tittle}>
        Draraedus
      </Link>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Início</Link>
        </li>
        <li className={styles.item}>
          <Link to="/Login">Login</Link>
        </li>
        <li className={styles.item}>
          <Link to="/Experiences">Experiências</Link>
        </li>
        <li className={styles.item}>
          <Link to="/Courses">Cursos</Link>
        </li>
        <li className={styles.item}>
          <Link to="/Github">Github</Link>
        </li>
      </ul>
      <Link to="/Contact" className={styles.navbar_contactus}>
        Contate-me
      </Link>
    </nav>
  );
}

export default NavBar;
