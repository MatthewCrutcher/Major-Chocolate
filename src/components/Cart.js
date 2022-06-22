import React from "react";
import Navbar from "./Navbar";
import image2 from "./images/image2.png";
import line from "./images/cart-line-breaker.png";
import line2 from "./images/total-seperator.png";
import mastercard from "./images/mastercard.png";
import visa from "./images/visa.png";
//CSS
import "./Cart.css";

function Cart() {
  return (
    <>
      <Navbar className="navbar" />
      <div className="cart-container">
        <div className="item-container">
          <img src={image2} alt="Product Image props.image" />
          <h2>Item Name</h2>
          <div className="quantity-container">
            <h2>Quantity:</h2>
            <button className="quantity-minus">
              <h4>-</h4>
            </button>
            <h2>2</h2>
            <button className="quantity-plus">
              <h4>+</h4>
            </button>
          </div>
          <div className="total-item-price-container">
            <h2>Total Price:</h2>
            <h2>$25</h2>
          </div>
          <img className="item-seperator" src={line} alt="item seperator" />
          <img src={image2} alt="Product Image props.image" />
          <h2>Item Name</h2>
          <div className="quantity-container">
            <h2>Quantity:</h2>
            <button>-</button>
            <h2>2</h2>
            <button>+</button>
          </div>
          <div className="total-item-price-container">
            <h2>Total Price:</h2>
            <h2>$25</h2>
          </div>
          <img className="item-seperator" src={line} alt="item seperator" />
          <img src={image2} alt="Product Image props.image" />
          <h2>Item Name</h2>
          <div className="quantity-container">
            <h2>Quantity:</h2>
            <button>-</button>
            <h2>2</h2>
            <button>+</button>
          </div>
          <div className="total-item-price-container">
            <h2>Total Price:</h2>
            <h2>$25</h2>
          </div>
          <img className="item-seperator" src={line} alt="item seperator" />
        </div>
        <div className="payment-container">
          <h1>Ready to go?</h1>
          <div className="total-amount-container">
            <h2>Your total is: </h2>
            <h2>$50</h2>
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
