import { useContext } from "react";
import { ProductsContext } from "../../Contexts/products.context";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map(({ id, name, imageUrl, price }) => (
        // <div key={id}>
        //   <img src={imageUrl} alt={name} />
        //   <h2>{name}</h2>
        //   <p>price: {price}$</p>
        // </div>
        <ProductCard key={id} name={name} imageUrl={imageUrl} price={price} />
      ))}
    </div>
  );
};

export default Shop;
