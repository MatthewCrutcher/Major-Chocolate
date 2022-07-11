import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//CSS
import "./Navbar.css";
//IMAGES
import Cart from "./images/Cart.png";
import DrowDown from "./images/navbar-dropdown-white.png";
// https://stackoverflow.com/questions/10510191/valid-to-use-a-anchor-tag-without-href-attribute
function Navbar() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <div className="navbar-container">
      <a className="logo-link" onClick={() => navigate("/")}>
        <h1>Major Chocolate</h1>
      </a>
      <img
        src={DrowDown}
        alt="navbar dropwdown toggle"
        className={active ? "dropdown-img-active" : "dropdown-img"}
        onClick={toggleActive}
      />
      <div className={active ? "navbar-links-active" : "navbar-links"}>
        <ul>
          <li onClick={() => navigate("/shop")}>
            <a>SHOP</a>
          </li>
          <li onClick={() => navigate("/cart")}>
            <a>
              <img src={Cart} alt="Shopping Cart" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
