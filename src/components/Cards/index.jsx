import { Link } from "react-router-dom"
import styles from './cards.module.css'

const Cards = ({ product }) => {
return (
    <Link to={`${product.id}`} >
        <div className={styles.cardContainer}>
        <h3 className={styles.cardTitle}>{product.title}</h3>
        <img className={styles.cardImg} src={product.image} alt={product.title} width="200" height="200" />
        <p className={styles.cardPrice}>${product.price}</p>
        </div>
    </Link>
    );
};

export default Cards
