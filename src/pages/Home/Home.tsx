import React from "react";

import styles from "./Home.module.css";
import crow from "../../assets/img/Crow.jpg";

function Home() {
  return (
    <div className={styles.home_div}>
      <section className={styles.home_info_section}>
        <div className={styles.home_info_img}>
          <img src={crow} alt="Minha foto" />
        </div>
        <div className={styles.home_about_div}>
          <h1>Adriel Luiz</h1>
          <h2>@Draraedus</h2>
          <ul className={styles.home_about_ul}>
            <li className={styles.home_about_li}>
              <span>Nome:</span> Adriel Luiz Santana dos Santos
            </li>
            <li className={styles.home_about_li}>
              <span>Idade:</span> 22
            </li>
            <li className={styles.home_about_li}>
              <span>Localização:</span> Nossa Senhora do Socorro-SE
            </li>
            <li className={styles.home_about_li}>
              <span>Escolaridade:</span> Cursando Sistemas de Informação na UFS
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.home_bio_section}>
        <div>
          <h1>Sobre mim</h1>
          <p>
            Olá! Meu nome é Adriel Luiz e uso de um nickname chamado Draraedus.
            Amo programação, tecnologia, jogos e música. O objetivo desse site é
            ser um site repertório com minhas informações e aprimorar minhas
            habilidades no Frontend em react. Enquanto eu não arranjar uma foto
            mais profissional irei deixar uma simples aqui.
          </p>
        </div>
        <div>
          <h1>Sobre o site</h1>
          <p>
            O site foi criado com o objetivo de ser meu site portfólio com
            algumas informações minhas, tentarei sempre incrementar novas
            tecnologias nele enquanto estudo.{" "}
            <strong>
              Site em desenvolvimento, Página de contato ainda não está
              funcional
            </strong>
          </p>
          <p>
            As Tecnologias que estão sendo usadas no momento são: React,
            Typescript, Firebase, Redux, React-Router-Dom;
          </p>
          <p>
            As funcionalidas que estão no site no momento são: página de
            autenticação e perfil de visitante público, páginas de perfil,
            cursos, experiências, contato e github.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
