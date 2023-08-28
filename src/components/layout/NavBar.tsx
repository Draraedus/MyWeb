import React from 'react'
import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.navbar_container}>
            <Container customClass="align_center">
                <div>
                    <Link to="/Home" className={styles.navbar_tittle}>Draraedus</Link>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Experiences">Experiências</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Courses">Cursos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Github">Github</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Contact">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar