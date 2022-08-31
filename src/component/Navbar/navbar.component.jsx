import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import Cart from '../cart/cart.component';

import './navbar.styles.css';
import carty from '../../assets/carty.png';

import { CartContext } from '../../component/cart/useCart';

const Navbar = () => {
    const cart = useContext(CartContext);
    const { data } = cart;

    const [showCart, setShowCart] = useState(false);

    const toggleShowCart = () => {
      setShowCart(!showCart);
      console.log('cart clicked');
    }

    return (
        <div>
            <div className='navbar'>
                <Link to='/'>Homepage</Link>
                <Link to='/checkout'>Checkout</Link>
                <div 
                    className='shopcart'
                    onClick={toggleShowCart}
                >
                    <img src={carty} alt="shopping cart" />
                </div>
            </div>
            <div>
                {
                    (showCart) ? (<Cart cartItems={data.cartItems} />) : null
                }
            </div>
        </div>
    );
}

export default Navbar;