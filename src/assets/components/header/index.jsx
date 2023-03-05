import React from "react";
import styles from './header.module.css'

const Header = () => {
return (
    <header className={styles.headerContainer}>
        <h2 className={styles.headerTittle}>CHIC</h2>
        <span className={styles.headerCartIcon}>🛒3</span>
    </header>
);
};

export default Header
