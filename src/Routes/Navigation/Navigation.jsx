import { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../Contexts/user.context";
import { CartDropdownContext } from "../../Contexts/cartDropdown.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import BeeLogo from "./../../Assets/svg/bee-logo2.svg";
import "./navigation.scss";
import CartIcon from "../../Components/CartIcon/CartIcon";
import CartDropdown from "../../Components/CartDropdown/CartDropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { showDropdown } = useContext(CartDropdownContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-link" to={"/"}>
          <img src={BeeLogo} alt="bee logo" className="logo" />
        </Link>
        <div className="navigation-links">
          <Link className="nav-link" to={"shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to={"auth"}>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {showDropdown && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
