import React from "react";

import styles from "./Experiences.module.css";
import CardList from "../../ui/components/layout/CardList";

function Experiences() {
  return (
    <section className={styles.experiences_container}>
      <h1>Minhas Experiências</h1>
      <ul className={styles.experiences_cards_container}>
        <CardList>
          <h3>Cargo: Aprendiz em Serv. Adm.</h3>
          <p>Empresa: Cencosud</p>
          <p>Ínicio: </p>
          <p>Final: Atual</p>
          <p>
            Responsabilidades: Auxiliar nas rotinas do dia a dia da área de
            suporte de campo do setor de TI da empresa.
          </p>
        </CardList>
      </ul>
    </section>
  );
}

export default Experiences;
