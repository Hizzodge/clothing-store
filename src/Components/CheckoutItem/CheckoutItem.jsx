import React, { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import "./checkout-item.scss";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const { name, quantity, price, imageUrl } = cartItem;
  const removeItem = () => removeItemFromCart(cartItem);
  const addItem = () => addItemToCart(cartItem);
  const deleteItem = () => clearItemFromCart(cartItem);

  const totalItemCost = quantity * price;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={removeItem}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={addItem}>
          &#10095;
        </span>
      </span>
      <span className="price">{totalItemCost}</span>
      <div className="remove-button" onClick={deleteItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
