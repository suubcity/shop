import React from "react";
import "./cart.css";
import checkOutImg from "./checkout.png";

function Cart(props) {
  return (
    <div>
      <div id="spacer"></div>
      <div id="cartContainer">
        <div id="innerCartContainer">
          <h5>Items: {props.cartItems || 0}</h5>
          <h5>Total: ${props.cartTotal}</h5>
          <div id="imgContainer">
            <img src={checkOutImg} id="checkOutImg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
