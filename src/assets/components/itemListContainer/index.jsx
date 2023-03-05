import React from "react";
import styles from './item.module.css'

const ItemListContainer = (props) => {
return (
    <div className={styles.saludo}>
    <p>{props.greeting}</p>
    </div>
);
};

export default ItemListContainer;
