import React, { useState } from 'react';

import CardNameInput from '../../component/cardname-input/cardname-input.component';
import CardData from '../../component/card-data/CardData.component';
import Navbar from '../../component/Navbar/navbar.component';


const HomePage = () => {
    
    const [cardData, setCardData] = useState('');
    const [searchField, setSearchField] = useState('');
    const [showCard, setShowCard] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const fetchData = async () => {
        try {
            //get the data from the api
            const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${searchField}`);
            //convert data to json
            const jsonResponse = await response.json();
            const cardData = {
                name: jsonResponse.data[0].name,
                image: jsonResponse.data[0].card_images[2].image_url,
                price: jsonResponse.data[0].card_prices[0].cardmarket_price
            }
            setCardData(cardData);

        } catch (e) {
            console.log(e);
        }
    }

    const handleChange = (event) => {
        const searchField = event.target.value;
        setSearchField(searchField)
        console.log(searchField);
    } 

    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
            const showCard = true;
            setShowCard(showCard);
            event.preventDefault();
            fetchData();
        }
    }

    const addToCart = () => {
        cartItems.push(cardData);
        setCartItems(cartItems);
        console.log(cartItems);
        // <Navbar cartItems={cartItems} />
    }
    
    return (
        <div className='homepage' props = {cardData}>
            <h1>Home Page</h1>
            <CardNameInput  
                handleChange = {handleChange}
                handleSubmit = {handleSubmit} 
            />
            <div>
                {
                    (showCard) ? (<CardData cardData={cardData} addToCart={addToCart} />) : null
                }
            </div>
        </div>
    );
};

export default HomePage;