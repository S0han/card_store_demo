import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import Cart from '../cart/cart.component';

import './navbar.styles.css';
import carty from '../../assets/carty.png';

import { CartContext } from '../../component/cart/useCart';

const Navbar = () => {

    const cart = useContext(CartContext);
    const {data, operations} = cart;

    return (
        <div>
            <div className='navbar'>
                <Link to='/'>Homepage</Link>
                <div 
                    className='shopcart'
                    onClick={operations.toggleShowCart}
                >
                    <img src={carty} alt="shopping cart" />
                </div>
            </div>
            <div>
                {
                    // (showCart) ? (<Cart cartItems={data.cartItems} />) : null
                    (data.showCart) ? (<Cart />) : null
                }
            </div>
        </div>
    );
}

export default Navbar;