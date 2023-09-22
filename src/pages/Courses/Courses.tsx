import React from 'react'
import {Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

import styles from './Courses.module.css'
import CardList from '../../components/layout/CardList';

function Courses() {

  return (
    <section className={styles.courses_container}>
      <h1>Meus Cursos</h1>
      <ul className={styles.courses_cards_container}>
        <CardList>
          <h3>Nome: </h3>
          <p>Instituição: </p>
          <p>Ínicio:</p>
          <p>Final:</p>
          <p>O que foi estudado:</p>
        </CardList>
      </ul>
    </section>
  )
}

export default Courses