import React from 'react';
import { useGameContext } from '../context/GameContext';
import Card from './Card';

export default function CardList({ cards, player }) {
  const { setFrom, setSelectedCard, selectedCard } = useGameContext();
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.suit + card.value}
          setSelectedCard={setSelectedCard}
          selectedCard={selectedCard}
          player={player}
          setFrom={setFrom}
          card={card}
        />
      ))}
    </div>
  );
}

// passing the props in by calling them from userGameContext and removing state from App.js
// we only pass props to state that are used for many things. player and card are not used more than once so they are not passed through?

// talk this out with Jace or Tanner.
