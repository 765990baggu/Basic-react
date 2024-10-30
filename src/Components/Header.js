import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNamelogin, setlogin] = useState("login");
  const { LoggedInUser } = useContext(UserContext);
  //Subscribing to the store using Selector
  const CartItems = useSelector((store) => store.cart.items);
  console.log(CartItems);

  return (
    <div className="flex justify-between bg-pink-50 m-4 shadow sm:bg-yellow-100 lg:bg-green-200">
      <div className="w-36">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className=" flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-3 text-xl font-bold">
            <Link to="/cart"> Cart({CartItems.length},items)</Link>
          </li>
          <button
            className="h-7 w-15 border border-solid border-black rounded-md px-1"
            onClick={() => {
              btnNamelogin === "login" ? setlogin("logout") : setlogin("login");
            }}
          >
            {btnNamelogin}
          </button>
          <li className="px-3 font-bold">{LoggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
