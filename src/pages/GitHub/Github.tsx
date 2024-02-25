import React, { useEffect, useState } from "react";

import styles from './Github.module.css'

import GithubUserType from "../../data/@types/GithubProfileType";
import GithubProfileRequest from "../../data/services/GithubProfileRequest";
import { FaGithub } from "react-icons/fa";
import { BsFillPeopleFill, BsPeople  } from "react-icons/bs"
import { RiGitRepositoryFill } from "react-icons/ri"
import { IconContext } from "react-icons";

function Github() {
  const [data, setData] = useState<GithubUserType | null>(null)

  useEffect(() => {
    if(data === null) {
      GithubProfileRequest()
        .then(function (result:GithubUserType):void {
          setData(result)
        })
    }
  })

  return (
    <div className={styles.Github_page}>
    {data ? (
      <>
        <div className={styles.Github_Photo_Container}>
          <img src={data.avatar_url} alt="Avatar" />
        </div>
        <h1>{data.name}</h1>
        <IconContext.Provider value={{ color: "white"}}>
          <div className={styles.Github_info_container}>
            <button>
              <RiGitRepositoryFill />
              {data.public_repos}
            </button>
            <button>
              <BsFillPeopleFill/>
              {data.followers}
            </button>
            <button>
              <BsPeople />
              {data.following}
            </button>
          </div>
        </IconContext.Provider>
        <p>Created At: {data.created_at}</p>
        <p>Updated At: {data.updated_at}</p>
        <a className={styles.button_icon} href={data.html_url} target="_blank" rel="noreferrer">
          <IconContext.Provider value={{ color: "black"}}>
            <div className={styles.icon}>
              <FaGithub/>
            </div>
          </IconContext.Provider>
          <div className={styles.cube}>
            <span className={`${styles.side} ${styles.front}`}>@{data.login}</span>
            <span className={`${styles.side} ${styles.top}`}>Veja no Github</span>
          </div>
        </a>
      </>
    ) : (
      <p>Carregando...</p>
      )}
    </div>
  )
}

export default Github;
