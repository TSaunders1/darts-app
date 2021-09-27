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
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState } from '../../redux/store';
import { gameSetupActions, scoreboardActions } from '../../redux';

const StartAGameModal = () => {
  const dispatch = useDispatch();

  const { setPlayer1Name, setPlayer2Name, setGameMode, setCloseModal } =
    bindActionCreators(gameSetupActions, dispatch);

  const { setPlayer1Total, setPlayer2Total, setScoreInputPlaceholder } =
    bindActionCreators(scoreboardActions, dispatch);

  const startAGameState = useSelector((state: RootState) => state);

  const { gameSetupReducer } = startAGameState;
  const { player1Name, player2Name, gameMode, closeModal } = gameSetupReducer;

  const startGame = () => {
    if (player1Name && player2Name && gameMode) {
      setCloseModal(true);
    } else {
      alert('You must enter in all the required options to start a game');
    }
  };

  return (
    <>
      <Modal isOpen={!closeModal} onClose={() => setCloseModal(true)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Set Up Game</ModalHeader>
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Player 1</FormLabel>
              <Input
                onChange={(event) => {
                  setPlayer1Name(event?.target.value);
                  setScoreInputPlaceholder(`${event?.target.value} score`);
                }}
                placeholder="Player 1 name"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Player 2</FormLabel>
              <Input
                onChange={(event) => setPlayer2Name(event?.target.value)}
                placeholder="Player 2 name"
              />
            </FormControl>
            <FormControl as="fieldset" isRequired>
              <FormLabel as="legend">Game Mode</FormLabel>
              <RadioGroup
                defaultValue="301"
                onChange={(value) => {
                  setGameMode(value);
                  setPlayer1Total(parseInt(value));
                  setPlayer2Total(parseInt(value));
                }}
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
