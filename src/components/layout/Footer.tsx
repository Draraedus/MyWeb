import React from 'react'
import {FaTelegram, FaLinkedin} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.list_link}>
                <a href="mailto:adriel2002santos@gmail.com">
                    <SiGmail />
                </a>
                <a href="https://t.me/Draraedus">
                    <FaTelegram />
                </a>
                <a href="https://www.linkedin.com/in/adrielluiz/">
                    <FaLinkedin />
                </a>
            </div>
            <p className={styles.copy_right}>
                <span>Draraedus</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer