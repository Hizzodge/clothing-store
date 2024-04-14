import { Outlet, Link } from "react-router-dom";
import BeeLogo from "./../../Assets/svg/bee-logo2.svg";
import "./navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-link" to={"/"}>
          <img src={BeeLogo} alt="bee logo" className="logo" />
        </Link>
        <div className="navigation-links">
          <Link className="nav-link" to={"/"}>
            SHOP
          </Link>
          <Link className="nav-link" to={"sign-in"}>
            SIGN IN
          </Link>
          <Link className="nav-link"></Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
