import React, { useState } from 'react';
import './Card.css';
import NextButton from '../Buttons/NextButtons';
import RejectButton from '../Buttons/RejectButton';

const shuffleArray = (array) => {
  return array
    .map((item) => ({ ...item, sortOrder: Math.random() }))
    .sort((a, b) => a.sortOrder - b.sortOrder) 
    .map(({ sortOrder, ...item }) => item); 
};

const getRandomName = (names) => {
  return names[Math.floor(Math.random() * names.length)];
};

const Card = ({ list, frontname, lastname }) => {
  const [cards] = useState(shuffleArray(list)); // Shuffle once and keep the same order
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    console.log("Next button clicked");

    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const card = cards[currentIndex];
  const randomName = getRandomName(frontname);
  const randomName2 = getRandomName(lastname);

  return (
    <div className="card-container">
      <div className="card">
        <img src={card.img} alt={card.Name} />
        <h2>{randomName + " " + randomName2}</h2>
        <p>Age: {Math.floor(Math.random() * 84) + 15}</p>
        <p>{card.description}</p>
      </div>
      <NextButton onClick={handleNext} />
      <RejectButton />
    </div>
  );
};

export default Card;
