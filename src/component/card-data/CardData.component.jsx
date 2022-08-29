import React from 'react';

const CardData = ({ cardData, addToCart }) => (
    <div className='carddata'>
        <h1>{cardData.name}</h1>
        <img src={cardData.image} alt={cardData.name} />
        <p>{cardData.price}</p>
        <button
            onClick={addToCart}
        >
            ADD TO CART
        </button>
    </div>
);

export default CardData