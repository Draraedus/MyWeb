import React from 'react'
import {Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

import styles from './Home.module.css'
import crow from '../../assets/img/Crow.jpg'

function Home() {

  const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated);

  if(isAuthenticated === false){
    return <Navigate to="/"/>
  }
  return (
    <div className={styles.home_container}>
      <section className={styles.home_tittle}>
        <h1>Adriel Luiz</h1>
        <h2>#Draraedus</h2>
      </section>
      <section className={styles.home_about}>
        <div>
          <h1>Sobre mim</h1>
          <p>Olá! Meu nome é Adriel Luiz e uso de um nickname chamado Draraedus. Amo programação, tecnologia, jogos e música.
            O objetivo desse site é ser um site repertório com minhas informações e aprimorar minhas habilidades no Frontend em react.
            Enquanto eu não arranjar uma foto mais profissional irei deixar uma simples aqui.
          </p>
        </div>
        <div className={styles.home_photo}>
          <img src={crow} alt="Minha foto" />
        </div>
        <div>
          <p className={styles.home_info}><span>Nome:</span> Adriel Luiz Santana dos Santos</p>
          <p className={styles.home_info}><span>Idade:</span> 21</p>
          <p className={styles.home_info}><span>Localização:</span> Nossa Senhora do Socorro-SE</p>
          <p className={styles.home_info}><span>Escolaridade:</span> Cursando Sistemas de Informação na UFS</p>
        </div>
      </section>
    </div>
  )
}

export default Home