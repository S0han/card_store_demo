
import React, { useState, createContext} from 'react';
import { useNavigate } from 'react-router-dom';

export const CartContext = createContext();

export function useCart () {
  let [cartItems, setCartItems] = useState([]);
  let [showTotal, setShowTotal] = useState(0);
  let [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  

  const toggleShowCart = () => {
    setShowCart(!showCart);
    console.log('cart clicked');
  }

  const navigateToCheckoutPage = () => {
    navigate('/checkout');
  }

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

  const removeCartItem = (idx) => {
    console.log(idx);
    cartItems = cartItems.filter((element, i) => (i !== idx))
    setCartItems(cartItems);
    totalAmount(cartItems);
    console.log(cartItems);
  }

  const checkOut = () => {
    console.log('check out button pressed');
    setShowCart(!showCart);
    navigateToCheckoutPage();
  }

  return {
    data: {
      cartItems,
      showTotal,
      showCart 
    },
    operations: {
      addToCart,
      removeCartItem,
      checkOut,
      toggleShowCart
    }
  }
}