import React, { useContext } from 'react';

import './cart.styles.css';

import { CartContext } from './useCart';

import remove from '../../assets/delete.png';

const Cart = () => {

    const cart = useContext(CartContext);
    const { data, operations } = cart;

    let renderCart = data.cartItems.map((item, i) => 
        (
            <div key={i} className='cart-content-entry'>
                <p>{item.name}</p>
                <img className='card-image' src={item.image} alt={item.name} />
                <p>${item.price}</p>
                <div className='delete-button' onClick={(e) => operations.removeCartItem(i)}>
                    <img src={remove} alt='delete button' />
                </div>
            </div>
        )
    );

    return (
        <div className='cart'>
            <div className='cart-content'>
                {
                    (data.cartItems !== null) ? renderCart : null
                }
            </div>
            <div className='cart-total-value'>
                <p>
                    {(data.showTotal !== 0) ? `Total: $${data.showTotal}` : 'The Shopping Cart Is Empty'}
                </p>
            </div>
            <div className='checkout-button'>
                <button onClick={operations.checkOut}>CHECKOUT</button>
            </div>
        </div>
    );
}

export default Cart;