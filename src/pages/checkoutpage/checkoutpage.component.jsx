import React, { useContext } from 'react';

import { CartContext } from '../../component/cart/useCart';

import remove from '../../assets/delete.png';

import './checkoutpage.styles.css';

 const CheckoutPage = () => {

    const cart = useContext(CartContext);
    const { data, operations } = cart;

    let renderCheckout = data.cartItems.map((item, i) => 
        (
            <div key={i} className='checkout-content-entry'>
                <img className='card-image' src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <div className='delete-button' onClick={(e) => operations.removeCartItem(i)}>
                    <img src={remove} alt='delete button' />
                </div>
            </div>
        )
    );

    return (
        <div className='checkoutpage'>
            <div className='cart-content'>
                {
                    (data.cartItems !== null) ? renderCheckout : null
                }
            </div>
            <div className='cart-total-value'>
                <p>
                    {(data.showTotal !== 0) ? `Total: $${data.showTotal}` : 'The Shopping Cart Is Empty'}
                </p>
            </div>
            <div className='checkout-btn'>
                <button onClick={null}>CONFIRM PURCHASE</button>
            </div>
        </div>
    );
}

export default CheckoutPage;