import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';


const NavBar = () => {

    let activeStyle = {
        color: "white",
        backgroundColor: "black",
        borderRadius: "10%",
        textDecoration: "none"
    };

    let noActiveStyle = {
        color: "black",
        textDecoration: "none",
    };



return (
    <nav className={styles.container}>
        <h1 className={styles.navTitle}>CHIC</h1>
    <NavLink
        to="/Inicio"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
    >
        Inicio
    </NavLink>
    <NavLink
        to="productos"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
    >
        Productos
    </NavLink>
    <NavLink
        to="cart"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
    >
        <span>🛒3</span>
    </NavLink>
    </nav>
);
};

export default NavBar;