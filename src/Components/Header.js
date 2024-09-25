import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNamelogin, setlogin] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="btn-login"
            onClick={() => {
              btnNamelogin === "login" ? setlogin("logout") : setlogin("login");
            }}
          >
            {btnNamelogin}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
