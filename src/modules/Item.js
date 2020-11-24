import React, { useState } from "react";
import "./item.css";

function Item(props) {
  return props.shopItems.map((item) => {
    return (
      <div key={item.key}>
        <div className="itemImageContainer">
          <img className="itemImage" src={item.img} alt={item.title}></img>
        </div>
        <h3>{item.title}</h3>
        <h4>${item.price}</h4>
        <div className="quantityContainer">
          {" "}
          <h3>Quantity</h3>
          <input
            data-key={item.key}
            onChange={props.handleChange}
            value={props.itemsQuantity[item.key]}
            className="quantityInput"
          ></input>
        </div>
        <div className="plusMinusContainer">
          <button onClick={() => props.increment(item.key)}>+</button>
          <button onClick={() => props.decrement(item.key)}>-</button>
        </div>
        <button onClick={() => props.addToCart(item.key)}>Add To Cart</button>
      </div>
    );
  });
}

export default Item;
