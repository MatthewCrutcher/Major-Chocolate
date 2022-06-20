import React, { useState } from "react";
//Component
import Navbar from "./Navbar";
//CSS
import "./Shop.css";
//IMAGES
import shopItem from "./images/image2.png";

function Shop() {
  const [counter, setCounter] = useState(0);
  const handleAddedToCart = (direction) => {};
  return (
    <div>
      <div className="shop-page-header-container">
        <Navbar />
        <h1 className="shop-header-text">Stay as long as you like</h1>
      </div>
      <div className="shop-items-container">
        <div className="item-card">
          <img src={shopItem} alt="desc of chocolate" />
          <h3>Strawberry Delights</h3>
          <p>The best chocoalte</p>
          <div className="amount-added-container">
            <button className="minus-button">
              <h4>-</h4>
            </button>
            <h3>{counter}</h3>
            <button className="plus-button">
              <h4 onClick={handleAddedToCart("increase")}>+</h4>
            </button>
          </div>
          <button className="addToCart-button">Add To Cart</button>
        </div>
        <div className="item-card">
          <img src={shopItem} alt="desc of chocolate" />
          <h3>Strawberry Delights</h3>
          <p>The best chocoalte</p>
          <button className="addToCart-button">Add To Cart</button>
        </div>
        <div className="item-card">
          <img src={shopItem} alt="desc of chocolate" />
          <h3>Strawberry Delights</h3>
          <p>The best chocoalte</p>
          <button className="addToCart-button">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
