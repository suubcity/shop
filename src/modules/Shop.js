import React, { useState, useEffect } from "react";
import Item from "./Item";
import Cart from "./Cart";
import "./shop.css";
import imgHeadphones from "./shop-items/headphones.jpg";
import imgMicrophone from "./shop-items/microphone.jpg";

import imgSpeaker from "./shop-items/speaker.jpg";

function Shop() {
  const shopItems = [
    { key: 0, title: "Headphones", img: imgHeadphones, price: 49.99 },
    { key: 1, title: "Microphone", img: imgMicrophone, price: 99.99 },
    { key: 2, title: "Speaker", img: imgSpeaker, price: 249.99 },
  ];

  const [itemsQuantity, setItemsQuantity] = useState([0, 0, 0]);

  function clearItemsQuantity(key) {
    setItemsQuantity((prevState) => [...prevState], (itemsQuantity[key] = 0));
  }

  function increment(key) {
    setItemsQuantity((prevState) => [...prevState], itemsQuantity[key]++);
  }

  function decrement(key) {
    if (itemsQuantity[key] !== 0) {
      setItemsQuantity((prevState) => [...prevState], itemsQuantity[key]--);
    }
  }

  const [cartItems, setCartItems] = useState(0);

  const [cartTotal, setCartTotal] = useState(0);

  function handleChange(e) {
    if (!isNaN(e.target.value)) {
      setItemsQuantity(
        (prevState) => [...prevState],
        (itemsQuantity[e.target.dataset.key] = +e.target.value)
      );
    }
  }

  function addToCart(key) {
    setCartItems(cartItems + itemsQuantity[key]);
    setCartTotal(cartTotal + shopItems[key].price * itemsQuantity[key]);
    clearItemsQuantity(key);
  }

  //cart key & quantity

  return (
    <div>
      <Cart cartItems={cartItems} cartTotal={cartTotal} />
      <div id="shop">
        <Item
          shopItems={shopItems}
          itemsQuantity={itemsQuantity}
          increment={increment}
          decrement={decrement}
          addToCart={addToCart}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Shop;
