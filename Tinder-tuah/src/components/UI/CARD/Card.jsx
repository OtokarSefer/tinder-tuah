import './Card.css'
import React, { useState } from 'react';
import NextButton from '../Buttons/Buttons';



const Card = ({ list }) => {

    const randomIndex = Math.floor(Math.random() * list.length);
    const card = list[randomIndex];
  
    return (
      <div className="card-container">
        <div className="card">
          <img src={card.img} alt={card.Name} />
          <h2>{card.Name}</h2>
          <p>Age: {card.Age}</p>
          <p>{card.description}</p>
        </div>
        <NextButton>Kiss Kiss</NextButton>
        <NextButton>No No</NextButton>
      </div>
    );
}

export default Card