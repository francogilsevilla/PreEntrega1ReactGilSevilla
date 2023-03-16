import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./productItem.module.css"

const ProductItem = () => {
const [product, setProduct] = useState({});
const { id } = useParams();

useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => setProduct(data));
}, []);

return (
    <div className={styles.cardContainer}>
        <img src={product.image} alt={product.title} width="200" height="200" />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>$ {product.price}</p>
        <button>Buy</button>
    </div>
);
};

export default ProductItem;