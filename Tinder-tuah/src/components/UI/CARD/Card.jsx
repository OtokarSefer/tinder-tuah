import React, { useState } from 'react';
import './Card.css';
import NextButton from '../Buttons/NextButtons';
import RejectButton from '../Buttons/RejectButton';

// Function to shuffle the array
const shuffleArray = (array) => {
  return array
    .map((item) => ({ ...item, sortOrder: Math.random() }))
    .sort((a, b) => a.sortOrder - b.sortOrder) 
    .map(({ sortOrder, ...item }) => item); 
};

// Function to get a random element from an array
const getRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const Card = ({ list, frontname, lastname, personalTraitsList, socialBehavioralList, physicalBodyList, imagesList }) => {
  const [cards] = useState(shuffleArray(list)); // Shuffle once and keep the same order
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    console.log("Next button clicked");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length); 
  };

  const card = cards[currentIndex]; 
  const randomName = getRandom(frontname); 
  const randomLastName = getRandom(lastname); 
  const randomImage = getRandom(imagesList);
  const randomPersonalTrait = getRandom(personalTraitsList);
  const randomBehavior = getRandom(socialBehavioralList);
  const randomPhysicalTrait = getRandom(physicalBodyList)
  
  return (
    <div className="card-container">
      <div className="card">
        <img src={randomImage} alt={card.Name} />
        <h2>{randomName + " " + randomLastName}</h2>
        <p>Age: {card.Age}</p>
        <p>Description: {randomPersonalTrait}, {randomBehavior}, {randomPhysicalTrait}</p>
      </div>
      <NextButton onClick={handleNext}/>
      <RejectButton onClick={handleNext}/>
    </div>
  );
};

export default Card;