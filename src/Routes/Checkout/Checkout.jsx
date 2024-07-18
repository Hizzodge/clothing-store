import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import "./checkout.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Total</span>
        <span>Remove</span>
      </div>
      {cartItems.map((item) => {
        const { id, name, quantity, price, imageUrl } = item;
        return (
          <div className="item" key={id}>
            <img src={imageUrl} alt={name} />
            <span>{name}</span>
            <span>{quantity}</span>
            <span>&#10005;</span>
            <span>{price}</span>
            <span>decrement</span>
            <span>increment</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
