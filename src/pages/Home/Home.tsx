import React from 'react'

import styles from './Home.module.css'
import crow from '../../assets/img/Crow.jpg'

function Home() {
  return (
    <div className={styles.home_page}>
      <section className={styles.home_info_container}>
        <div className={styles.home_photo}>
          <img src={crow} alt="Minha foto" />
        </div>
        <div className={styles.home_tittle}>
          <h1>Adriel Luiz</h1>
          <h2>@Draraedus</h2>
        </div>
        <div className={styles.home_about_container}>
          <p className={styles.home_about}><span>Nome:</span> Adriel Luiz Santana dos Santos</p>
          <p className={styles.home_about}><span>Idade:</span> 21</p>
          <p className={styles.home_about}><span>Localização:</span> Nossa Senhora do Socorro-SE</p>
          <p className={styles.home_about}><span>Escolaridade:</span> Cursando Sistemas de Informação na UFS</p>
        </div>
      </section>
      <section className={styles.home_bio_container}>
        <div>
          <h1>Sobre mim</h1>
          <p>
            Olá! Meu nome é Adriel Luiz e uso de um nickname chamado Draraedus. Amo programação, tecnologia, jogos e música.
            O objetivo desse site é ser um site repertório com minhas informações e aprimorar minhas habilidades no Frontend em react.
            Enquanto eu não arranjar uma foto mais profissional irei deixar uma simples aqui.
          </p>
        </div>
        <div>
          <h1>Sobre o site</h1>
          <p>
            O site foi criado com o objetivo de ser meu site portfólio com algumas informações minhas, tentarei sempre incrementar novas tecnologias nele enquanto estudo. <strong>Site em desenvolvimento, Página de contato ainda não está funcional</strong>
          </p>
          <p>
            As Tecnologias que estão sendo usadas no momento são: React, Typescript, Firebase, Redux, React-Router-Dom;
          </p>
          <p>
            As funcionalidas que estão no site no momento são: página de autenticação e perfil de visitante público, páginas de perfil, cursos, experiências, contato e github.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home