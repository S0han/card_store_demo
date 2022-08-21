import React from 'react';

const CardNameInput = ({ handleChange, handleSubmit }) => (
    <div className='cardnameinput'>
        <input 
            className='form-input'
            onChange= {handleChange}
            onKeyPress = {handleSubmit} 
        />
    </div>
);

export default CardNameInput;