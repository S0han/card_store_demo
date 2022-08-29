import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Cart from '../cart/cart.component';

import './navbar.styles.css';
import cart from '../../assets/cart.png';

const Navbar = ({ cartItems }) => {
    const [showCart, setShowCart] = useState(false);

    const toggleShowCart = () => {
      setShowCart(!showCart);
      console.log('cart clicked');
    }

    console.log(cartItems);

    return (
        <div>
            <div className='navbar'>
                <Link to='/'>Homepage</Link>
                <Link to='/checkout'>Checkout</Link>
                <div 
                    className='shopcart'
                    onClick={toggleShowCart}
                >
                    <img src={cart} alt="shopping cart" />
                </div>
            </div>
            <div>
                {
                    (showCart) ? (<Cart cartItems={cartItems} />) : null
                }
            </div>
        </div>
    );
}

export default Navbar;