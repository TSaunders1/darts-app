import React, { useState } from 'react';
import { Heading, useMediaQuery } from '@chakra-ui/react';
import StartAGameModal from '../Components/StartAGameModal/StartAGameModal';
import EndGameButton from '../Components/EndGameButton/EndGameButton';
import Scoreboard from '../Components/Scoreboard/Scoreboard';

const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [gameMode, setGameMode] = useState('301');

  const [isMobile] = useMediaQuery('(min-width: 600px)');

  return (
    <>
      {isMobile ? (
        <Heading fontSize="6xl">Let's Play Darts!</Heading>
      ) : (
        <Heading fontSize="4xl">Let's Play Darts!</Heading>
      )}
      <StartAGameModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        player1Name={player1Name}
        setPlayer1Name={setPlayer1Name}
        player2Name={player2Name}
        setPlayer2Name={setPlayer2Name}
        gameMode={gameMode}
        setGameMode={setGameMode}
      />
      <Scoreboard
        player1Name={player1Name}
        player2Name={player2Name}
        gameMode={gameMode}
      />
      <EndGameButton />
    </>
  );
};

export default HomePage;
