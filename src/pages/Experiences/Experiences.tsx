import React from 'react'
import {Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

import styles from './Experiences.module.css'

function Experiences() {

  const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated);

  if(isAuthenticated === false){
    return <Navigate to="/"/>
  }
  return (
    <section className={styles.experiences_container}>
      <h1>Minhas Experiências</h1>
      <ul className={styles.experience_cards_container}>
        <li className={styles.experience_card_container}>
          <h3>Cargo: Aprendiz</h3>
          <p>Empresa: Cencosud</p>
          <p>Atual</p>
          <p>Responsabilidades: Auxiliar nas rotinas do dia a dia da área de suporte de área do setor de TI da empresa.</p>
        </li>
      </ul>
    </section>
  )
}

export default Experiences