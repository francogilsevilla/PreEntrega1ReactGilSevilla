import Cards from "../Cards"


const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Cards key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;