import React from 'react'

import styles from './Experiences.module.css'

function Experiences() {
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