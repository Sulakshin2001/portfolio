import React from "react";
import styles from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <a className={styles.href} href="">Главное</a>
            <a className={styles.href} href="">Скилы</a>
            <a className={styles.href} href="">Проекты</a>
            <a className={styles.href} href="">Контакты</a>

        </div>
    )
}