import React from 'react';
import { Heading, useMediaQuery } from '@chakra-ui/react';
import EndGameButton from '../Components/EndGameButton/EndGameButton';
import Scoreboard from '../Components/Scoreboard/Scoreboard';
import StartAGameModal from '../Components/StartAGameModal/StartAGameModal';

const HomePage: React.FC = () => {
  const [isMobile] = useMediaQuery('(min-width: 600px)');

  const headingFontSize = isMobile ? '4xl' : '6xl';

  return (
    <>
      <Heading fontSize={headingFontSize}>Let's Play Darts!</Heading>
      <StartAGameModal />
      <Scoreboard />
      <EndGameButton />
    </>
  );
};

export default HomePage;
