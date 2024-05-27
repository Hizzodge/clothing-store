import { ReactComponent as ShoppingCardIcon } from "../../Assets/svg/shopping-bag.svg";
import { useContext } from "react";
import { CartDropdownContext } from "../../Contexts/cartDropdown.context";
import "./cart-icon.scss";

const CartIcon = () => {
  const { showDropdown, setShowDropdown } = useContext(CartDropdownContext);

  const cartDropdownhandler = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="cart-icon-container" onClick={cartDropdownhandler}>
      <ShoppingCardIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
