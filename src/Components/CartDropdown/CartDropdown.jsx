import Button from "../Button/Button";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">hello </div>
      <Button label="GO TO CHECKOUT" buttonType="secondary" />
    </div>
  );
};

export default CartDropdown;
