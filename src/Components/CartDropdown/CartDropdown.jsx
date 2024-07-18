import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem.jsx";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  // para ser removido e passar para o cartContext
  // const [isCheckout, setIsCheckout] = useState(false);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button label={"GO TO CHECKOUT"} onClick={goToCheckoutHandler}></Button>
    </div>
  );
};

export default CartDropdown;
