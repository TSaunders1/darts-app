import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
} from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  player1Name: string;
  setPlayer1Name: Dispatch<SetStateAction<string>>;
  player2Name: string;
  setPlayer2Name: Dispatch<SetStateAction<string>>;
  gameMode: string;
  setGameMode: Dispatch<SetStateAction<string>>;
};

const StartAGameModal: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  player1Name,
  setPlayer1Name,
  player2Name,
  setPlayer2Name,
  gameMode,
  setGameMode,
}) => {
  const startGame = () => {
    if (player1Name && player2Name && gameMode) {
      setIsOpen(false);
    } else {
      alert('You must enter in all the required options to start a game');
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Set Up Game</ModalHeader>
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Player 1</FormLabel>
              <Input
                onChange={(event) => setPlayer1Name(event.target.value)}
                placeholder="Player 1 name"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Player 2</FormLabel>
              <Input
                onChange={(event) => setPlayer2Name(event.target.value)}
                placeholder="Player 2 name"
              />
            </FormControl>
            <FormControl as="fieldset" isRequired>
              <FormLabel as="legend">Game Mode</FormLabel>
              <RadioGroup
                defaultValue="301"
                onChange={(value) => setGameMode(value)}
              >
                <HStack spacing="24px">
                  <Radio value="301">301</Radio>
                  <Radio value="501">501</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={startGame}>
              Start Game!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StartAGameModal;
