import React from 'react';

import './cart.styles.css';

const Cart = ({ cartItems }) => {
    console.log(cartItems); // showing undefined
    return (
        <div className='cart'>
            <div className='cart-content'>
                {
                    (cartItems != null) ? cartItems.map((item, i) => 
                        <div key={i}>
                            <p>{item.name}</p>
                            {/* <img src={item.name} alt={item.name} /> */}
                        </div>
                    ) : null
                }
            </div>
            <div className='checkout-button'>
                <button>CHECKOUT</button>
            </div>
        </div>
    );
}

export default Cart;