import React from 'react'
import styles from './Courses.module.css'

function Courses() {
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