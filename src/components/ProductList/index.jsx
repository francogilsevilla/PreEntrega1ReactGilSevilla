import styles from "./productList.module.css";

const  ProductList = () => {
return (
    <div>
        {product.map((product) => (
        <h5>{product.title}</h5>
    ))}
    </div>
);
};

export default ProductList;
