import React, { useState } from 'react';
import './Card.css';
import NextButton from '../Buttons/NextButtons';
import RejectButton from '../Buttons/RejectButton';

// Function to shuffle an array
const shuffleArray = (array) => {
  return array
    .map((item) => ({ ...item, sortOrder: Math.random() })) // Add random sortOrder
    .sort((a, b) => a.sortOrder - b.sortOrder) // Sort by sortOrder
    .map(({ sortOrder, ...item }) => item); // Remove sortOrder
};

const Card = ({ list }) => {
  // Shuffle the cards on initialization
  const [cards] = useState(shuffleArray(list)); // Shuffle once and keep the same order
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    console.log("Next button clicked");

    // Move to the next card, looping back to the first card if at the end
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const card = cards[currentIndex];

  return (
    <div className="card-container">
      <div className="card">
        <img src={card.img} alt={card.Name} />
        <h2>{card.Name}</h2>
        <p>Age: {card.Age}</p>
        <p>{card.description}</p>
      </div>
      <NextButton onClick={handleNext} />
      <RejectButton />
    </div>
  );
};

export default Card;
