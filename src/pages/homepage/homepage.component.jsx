import React, { useEffect, useState } from 'react';

import CardNameInput from '../../component/cardname-input/cardname-input.component';

const HomePage = () => {
    
    const [cardData, setCardData] = useState('');
    const [searchField, setSearchField] = useState('');

    const fetchData = async () => {
        try {
            //get the data from the api
            const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${searchField}`);
            //convert data to json
            const jsonResponse = await response.json();
            const cardData = {
                name: jsonResponse.data[0].name,
                image: jsonResponse.data[0].card_images[2].image_url
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
    
    return (
        <div className='homepage' props = {cardData}>
            Home Page
            <CardNameInput  
                handleChange = {handleChange}
                handleSubmit = {(event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        fetchData();
                    }
                } } 
            />
            <div>
                <h1>{cardData.name}</h1>
                <img src={cardData.image} alt={cardData.name} />
            </div>
        </div>
    );
};

export default HomePage;