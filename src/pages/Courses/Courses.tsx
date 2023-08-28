import React from 'react'
import {Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

import styles from './Courses.module.css'

function Courses() {

  const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated);

  if(isAuthenticated === false){
    return <Navigate to="/"/>
  }
  return (
    <section className={styles.courses_container}>
      <h1>Meus Cursos</h1>
      <ul className={styles.courses_cards_container}>
        <li className={styles.course_card_container}>
          <h3>Nome: </h3>
          <p>Instituição: </p>
          <p>Ínicio:</p>
          <p>Final:</p>
          <p>O que foi estudado:</p>
        </li>
      </ul>
    </section>
  )
}

export default Courses