import React, { useState, useEffect } from "react";
//Component
import Navbar from "./Navbar";
//CSS
import "./Shop.css";
//IMAGES
import shopItem from "./images/image2.png";
//REDUX TOOLKIT --- REACT-REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../app/features/shop/shopSlice";
import {
  addToCart,
  increaseAmount,
  decreaseAmount,
  checkAmount,
} from "../app/features/cart/cartSlice";

function Shop() {
  const item = useSelector((state) => state.shop);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  const mapItems = item.items.map((val) => {
    return (
      <div className="item-card">
        <img src={val.imgURL} alt={val.title} />
        <h3>{val.title}</h3>
        <p>{val.description}</p>
        <div className="amount-added-container">
          <button
            className="minus-button"
            onClick={() => dispatch(decreaseAmount(val.id))}
          >
            <h4>-</h4>
          </button>
          <h3>{cart.amount}</h3>

          <button
            className="plus-button"
            onClick={() => dispatch(increaseAmount(val.id))}
          >
            <h4>+</h4>
          </button>
        </div>
        <button
          className="addToCart-button"
          onClick={() =>
            dispatch(addToCart({ itemID: val.id, title: val.title, amount: 1 }))
          }
        >
          Add To Cart
        </button>
      </div>
    );
  });
  return (
    <div>
      <div className="shop-page-header-container">
        <Navbar />
        <h1 className="shop-header-text">Stay as long as you like</h1>
      </div>
      <div className="shop-items-container">{mapItems}</div>
    </div>
  );
}

export default Shop;
