import Button from "../Button/Button";
import "../ProductCard/product-card.scss";
const ProductCard = ({ id, name, price, imageUrl }) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">Price: {price}$</span>
      </div>
      <Button label="Add to Cart" buttonType={"inverted"} />
    </div>
  );
};

export default ProductCard;
