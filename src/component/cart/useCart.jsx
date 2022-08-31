
import React, { useState, createContext} from 'react'

export const CartContext = createContext();

export function useCart () {
  const [cartItems, setCartItems] = useState([]);
  let [showTotal, setShowTotal] = useState(0);

  const addToCart = (cardData) => {
    cartItems.push(cardData);
    setCartItems(cartItems);
    totalAmount(cartItems);
    console.log(cartItems)
  }

  const totalAmount = (cartItems) => {
    let temp = 0;
    for (let i = 0; i < cartItems.length; i++) {
      temp += parseFloat(cartItems[i].price); 
    }
    let showTotal = Math.round(temp * 100) / 100;
    setShowTotal(showTotal);
    console.log(showTotal);
  }

  return {
    data: {
      cartItems,
      showTotal
    },
    operations: {
      addToCart
    }
  }
}