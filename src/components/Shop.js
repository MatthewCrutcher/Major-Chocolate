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
        {cart.cart.map((value) =>
          val.id === value.itemID ? (
            <div className="amount-added-container">
              <button
                className="minus-button"
                onClick={() => dispatch(decreaseAmount(val.id))}
              >
                {cart.cart.map((value) =>
                  val.id === value.itemID && value.amount === 1 ? (
                    <h4>X</h4>
                  ) : null
                )}
                {cart.cart.map((value) =>
                  val.id === value.itemID && value.amount !== 1 ? (
                    <h4>-</h4>
                  ) : null
                )}
              </button>

              <h3>
                {cart.cart.map((value) =>
                  val.id === value.itemID ? value.amount : null
                )}
              </h3>

              <button
                className="plus-button"
                onClick={() => dispatch(increaseAmount(val.id))}
              >
                <h4>+</h4>
              </button>
            </div>
          ) : null
        )}

        <button
          className="addToCart-button"
          onClick={() =>
            dispatch(
              addToCart({
                itemID: val.id,
                title: val.title,
                amount: 1,
                initialPrice: val.price,
                calcPrice: val.price,
                imgURL: val.imgURL,
              })
            )
          }
        >
          Add To Cart
        </button>
        <h4 className="item-price">$ {val.price}</h4>
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
