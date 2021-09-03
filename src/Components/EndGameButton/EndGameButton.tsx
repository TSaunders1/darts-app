import { Button } from '@chakra-ui/react';
import { EndGameDiv } from './EndGameButton.styles';

const EndGameButton = () => {
  function handleClick() {
    window.location.reload();
  }
  return (
    <EndGameDiv>
      <Button colorScheme="blue" onClick={handleClick}>
        End Game!
      </Button>
    </EndGameDiv>
  );
};

export default EndGameButton;
