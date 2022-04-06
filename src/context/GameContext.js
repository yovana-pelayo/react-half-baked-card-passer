import { createContext, useContext, useState } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  return (
    <GameContext.Provider
      value={{
        deck,
        setDeck,
        selectedCard,
        setSelectedCard,
        playerOneHand,
        setPlayerOneHand,
        setPlayerThreeHand,
        playerThreeHand,
        playerTwoHand,
        setPlayerTwoHand,
        from,
        setFrom,
        to,
        setTo,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('Gamer must be within a gameProvider');
  }
  return context;
};
export { useGameContext, GameProvider };
//we set the state
