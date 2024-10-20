import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import "./checkout.scss";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Total</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })}
      <span className="total">Total: ${total} </span>
    </div>
  );
};

export default Checkout;
