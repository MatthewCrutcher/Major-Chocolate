import React from "react";
import Navbar from "./Navbar";
//IMAGES

import line2 from "./images/total-seperator.png";
import mastercard from "./images/mastercard.png";
import visa from "./images/visa.png";
//CSS
import "./Cart.css";
// REDUX TOOLKIT --- REACT-REDUX
import { useDispatch, useSelector } from "react-redux";
import { increaseAmount, decreaseAmount } from "../app/features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const mappingCart = cart.cart.map((value) => {
    return (
      <div className="key-value-container" key={value.itemID}>
        <img src={value.imgURL} alt={value.title} />
        <h2>{value.title}</h2>
        <div className="quantity-container">
          <h2>Quantity:</h2>
          <button
            className="quantity-minus"
            onClick={() => dispatch(decreaseAmount(value.itemID))}
          >
            {value.amount === 1 ? <h4>X</h4> : <h4>-</h4>}
          </button>
          <h2>{value.amount}</h2>
          <button
            className="quantity-plus"
            onClick={() => dispatch(increaseAmount(value.itemID))}
          >
            <h4>+</h4>
          </button>
        </div>
        <div className="total-item-price-container">
          <h2>Total Price:</h2>
          <h2>${value.calcPrice}</h2>
        </div>
      </div>
    );
  });
  return (
    <>
      <Navbar className="navbar" />

      <div className="cart-container">
        <div className="item-container">
          {cart.cart.length === 0 ? (
            <h3>No Items Added.</h3>
          ) : (
            <>{mappingCart}</>
          )}
        </div>
        <div className="payment-container">
          <h1>Ready to go?</h1>
          <div className="total-amount-container">
            <h2>Your total is: </h2>
            <h2>${cart.totalPrice}</h2>
          </div>
          <img
            className="total-seperator"
            src={line2}
            alt="Line seperating total to form"
          />
          <form className="payment-form">
            <input className="name-card-input" placeholder="Name on card *" />
            <input className="name-card-input" placeholder="Card number *" />
            <div className="ccv-message-logos-container">
              <div className="ccv-logos-container">
                <input placeholder="CCV*" />
                <div className="payment-logos">
                  <img src={mastercard} alt="mastercard logo" />
                  <img src={visa} alt="visa logo" />
                </div>
              </div>
              <textarea placeholder="A message?..." />
            </div>
            <button>Buy</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cart;
