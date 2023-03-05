import React from 'react'
import styles from './navbar.module.css'

function NavBar() {
return (
    <nav>
        <ul className={styles.navContainer}>
            <li><a className={styles.navItem} href="">Inicio</a></li>
            <li><a className={styles.navItem} href="">Descuentos</a></li>
            <li><a className={styles.navItem} href="">Catalogo</a></li>
            <li><a className={styles.navItem} href="">Contacto</a></li>
        </ul>
    </nav>
);
};

export default NavBar