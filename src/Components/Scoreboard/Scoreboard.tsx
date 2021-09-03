/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';
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

type Props = {
  player1Name: string;
  player2Name: string;
  gameMode: string;
};

const Scoreboard: React.FC<Props> = ({
  player1Name,
  player2Name,
  gameMode,
}) => {
  const [player1Total, setplayer1Total] = useState(parseInt(gameMode));
  const [player2Total, setplayer2Total] = useState(parseInt(gameMode));
  const [player1TotalList, setplayer1TotalList] = useState<number[]>([]);
  const [player2TotalList, setplayer2TotalList] = useState<number[]>([]);
  const [turn, setTurn] = useState('player1');
  const [scoreInputPlaceholder, setScoreInputPlaceholder] = useState(
    `${player1Name} Score`
  );
  const [scoreInputValue, setScoreInputValue] = useState('');

  useEffect(() => {
    setplayer1Total(parseInt(gameMode));
    setplayer2Total(parseInt(gameMode));
  }, [gameMode]);

  useEffect(() => {
    setScoreInputPlaceholder(`${player1Name} Score`);
  }, [player1Name]);

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

  const numberButtonClick = (value: any) => {
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

  const changeTurn = (score: any) => {
    switch (turn) {
      case 'player1':
        player1TotalList.push(score);
        setplayer1TotalList(player1TotalList);
        setTurn('player2');
        setScoreInputPlaceholder(`${player2Name} score`);
        setplayer1Total(player1Total - score);
        break;
      case 'player2':
        player2TotalList.push(score);
        setplayer2TotalList(player2TotalList);
        setTurn('player1');
        setScoreInputPlaceholder(`${player1Name} score`);
        setplayer2Total(player2Total - score);
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
