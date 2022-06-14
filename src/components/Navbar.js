import React, { useState } from "react";
//CSS
import "./Navbar.css";
//IMAGES
import Cart from "./images/Cart.png";
import DrowDown from "./images/navbar-dropdown.png";
// https://stackoverflow.com/questions/10510191/valid-to-use-a-anchor-tag-without-href-attribute
function Navbar() {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <div className="navbar-container">
      <a className="logo-link">
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
          <li>
            <a>SHOP</a>
          </li>
          <li>
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
