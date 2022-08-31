import React, { useState, useContext } from 'react';

import './cart.styles.css';

import { CartContext } from './useCart';

import remove from '../../assets/delete.png';

const Cart = ({ cartItems }) => {

    const cart = useContext(CartContext);
    const { data } = cart;

    let renderCart = cartItems.map((item, i) => 
        (
            <div key={i} className='cart-content-entry'>
                <p>{item.name}</p>
                <img src={item.image} alt={item.name} />
                <p>{item.price}</p>
            </div>
        )
    );

    return (
        <div className='cart'>
            <div className='cart-content'>
                {
                    (cartItems != null) ? renderCart : null
                }
            </div>
            <div><p>{data.showTotal}</p></div>
            <div className='checkout-button'>
                <button>CHECKOUT</button>
            </div>
        </div>
    );
}

export default Cart;