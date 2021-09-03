import styled from 'styled-components';
import { Button, chakra } from '@chakra-ui/react';

export const ScoreboardStyles = styled.div`
  padding: 20px;
`;

export const ScoreStyles = styled.div`
  display: flex;
  justify-content: center;
`;

export const PlayerScore = styled.span`
  font-size: 3rem;
  text-align: right;
  margin-bottom: 2rem;
`;

export const PlayerName = styled.span`
  font-size: 3rem;
  text-decoration: bold;
`;

export const ScoreInput = styled.div`
  display: flex;
  justify-content: center;
`;

export const NumberButton = chakra(Button, {
  baseStyle: {
    height: '4rem',
    width: '4rem',
    margin: '0.5rem',
  },
});

export const NumberButtonsDiv = styled.div`
  text-align: center;
  max-width: 19rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const EnterScoreButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const ScoresTableDiv = styled.div`
  text-align: center;
  max-width: 35rem;

  @media (max-width: 600px) {
    margin-top: 2rem;
  }
`;
