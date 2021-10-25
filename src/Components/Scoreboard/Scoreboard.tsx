/* eslint-disable default-case */
import React from 'react';
import {
  Button,
  Grid,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useMediaQuery,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { scoreboardActions } from '../../redux';
import {
  EnterScoreButtonDiv,
  NumberButton,
  NumberButtonsDiv,
  PlayerName,
  PlayerScore,
  ScoreboardStyles,
  ScoreInput,
  ScoresTableDiv,
  ScoreStyles,
} from './Scoreboard.styles';
import { RootState } from '../../redux/store';

const Scoreboard: React.FC = () => {
  const { gameSetupReducer, scoreboardReducer } = useSelector(
    (state: RootState) => state
  );

  const { player1Name, player2Name } = gameSetupReducer;

  const {
    player1Total,
    player2Total,
    player1TotalList,
    player2TotalList,
    turn,
    scoreInputPlaceholder,
    scoreInputValue,
  } = scoreboardReducer;

  const dispatch = useDispatch();

  const {
    setPlayer1Total,
    setPlayer2Total,
    setPlayer1TotalList,
    setPlayer2TotalList,
    setTurn,
    setScoreInputPlaceholder,
    setScoreInputValue,
  } = bindActionCreators(scoreboardActions, dispatch);

  const playerScores = player1TotalList.map((score, index) => (
    <Tr key={`scoreRow-${index}`}>
      <Td>{index + 1}</Td>
      <Td isNumeric>{score}</Td>
      <Td isNumeric>{player2TotalList[index]}</Td>
    </Tr>
  ));

  let scoreTable;
  if (player1TotalList.length > 0) {
    scoreTable = (
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th isNumeric>{`${player1Name} score`}</Th>
            <Th isNumeric>{`${player2Name} score`}</Th>
          </Tr>
        </Thead>
        <Tbody>{playerScores}</Tbody>
      </Table>
    );
  }

  const numberButtonClick = (value: number) => {
    setScoreInputValue(`${scoreInputValue}${value}`);
  };

  const numberButtons = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]].map(
    (group, index) => {
      const buttonGroup = group.map((value) => (
        <NumberButton
          type="button"
          key={`numberButton-${value}`}
          onClick={() => numberButtonClick(value)}
        >
          {value}
        </NumberButton>
      ));

      return (
        <NumberButtonsDiv key={`numberGroup-${index}`}>
          {buttonGroup}
        </NumberButtonsDiv>
      );
    }
  );

  const removeButtonClick = () => {
    setScoreInputValue(
      scoreInputValue.substring(0, scoreInputValue.length - 1)
    );
  };

  const changeTurn = (score: number) => {
    switch (turn) {
      case 'player1':
        setPlayer1TotalList(score);
        setTurn('player2');
        setScoreInputPlaceholder(`${player2Name} score`);
        setPlayer1Total(player1Total - score);
        break;
      case 'player2':
        setPlayer2TotalList(score);
        setTurn('player1');
        setScoreInputPlaceholder(`${player1Name} score`);
        setPlayer2Total(player2Total - score);
        break;
    }

    setScoreInputValue('');
  };

  const individualPlayerScoreValidation = (
    playerTotal: number,
    playerName: string,
    score: number
  ) => {
    if (playerTotal - score === 1 || playerTotal - score < 0) {
      alert('No Score! You have bust!');
      changeTurn(0);
    } else if (playerTotal - score === 0) {
      alert(
        `Well done, ${playerName}! You have won! Click "ok" to restart game.`
      );
      window.location.reload();
    } else if (!score) {
      changeTurn(0);
    } else {
      changeTurn(score);
    }
  };

  const changeTurnValidation = () => {
    const score = parseInt(scoreInputValue);

    if (score >= 181) {
      alert('Please enter a valid score!');
      setScoreInputValue('');
    } else if (turn === 'player1') {
      individualPlayerScoreValidation(player1Total, player1Name, score);
    } else if (turn === 'player2') {
      individualPlayerScoreValidation(player2Total, player2Name, score);
    }
  };

  const enterButtonClick = () => {
    changeTurnValidation();
  };

  const updateScore = (e: any) => {
    setScoreInputValue(e.target.value);
  };

  const setScore = (e: any) => {
    if (e.key === 'Enter') {
      changeTurnValidation();
    }
  };

  const [isMobile] = useMediaQuery('(min-width: 600px)');

  return (
    <ScoreboardStyles>
      <ScoreStyles>
        <PlayerName>{player1Name}</PlayerName>
        <PlayerName>-</PlayerName>
        <PlayerName>{player2Name}</PlayerName>
      </ScoreStyles>
      <ScoreStyles>
        <PlayerScore>{player1Total}</PlayerScore>
        <PlayerScore>-</PlayerScore>
        <PlayerScore>{player2Total}</PlayerScore>
      </ScoreStyles>
      {isMobile ? (
        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
          <div>
            <ScoreInput>
              <span>
                <Input
                  type="text"
                  onKeyDown={setScore}
                  value={scoreInputValue}
                  onChange={updateScore}
                  placeholder={scoreInputPlaceholder}
                />
              </span>
              <span>
                <Button
                  colorScheme="red"
                  type="button"
                  onClick={removeButtonClick}
                >
                  &larr;
                </Button>
              </span>
            </ScoreInput>
            {numberButtons}
            <EnterScoreButtonDiv>
              <Button
                colorScheme="teal"
                type="button"
                onClick={enterButtonClick}
              >
                Enter Score
              </Button>
            </EnterScoreButtonDiv>
          </div>
          <ScoresTableDiv>{scoreTable}</ScoresTableDiv>
        </Grid>
      ) : (
        <div>
          <div>
            <ScoreInput>
              <span>
                <Input
                  type="text"
                  onKeyDown={setScore}
                  value={scoreInputValue}
                  onChange={updateScore}
                  placeholder={scoreInputPlaceholder}
                />
              </span>
              <span>
                <Button
                  colorScheme="red"
                  type="button"
                  onClick={removeButtonClick}
                >
                  &larr;
                </Button>
              </span>
            </ScoreInput>
            {numberButtons}
            <EnterScoreButtonDiv>
              <Button
                colorScheme="teal"
                type="button"
                onClick={enterButtonClick}
              >
                Enter Score
              </Button>
            </EnterScoreButtonDiv>
          </div>
          <ScoresTableDiv>{scoreTable}</ScoresTableDiv>
        </div>
      )}
    </ScoreboardStyles>
  );
};

export default Scoreboard;
