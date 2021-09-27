import { scoreboardTypes } from '../types/scoreboardTypes';

type setPlayerTotalActionType = {
  type: string;
  payload: number;
};

type setTurnActionType = {
  type: string;
  payload: string;
};

export const setPlayer1Total = (score: number): setPlayerTotalActionType => ({
  type: scoreboardTypes.PLAYER_1_TOTAL,
  payload: score,
});

export const setPlayer2Total = (score: number): setPlayerTotalActionType => ({
  type: scoreboardTypes.PLAYER_2_TOTAL,
  payload: score,
});

export const setPlayer1TotalList = (
  score: number
): setPlayerTotalActionType => ({
  type: scoreboardTypes.PLAYER_1_TOTAL_LIST,
  payload: score,
});

export const setPlayer2TotalList = (
  score: number
): setPlayerTotalActionType => ({
  type: scoreboardTypes.PLAYER_2_TOTAL_LIST,
  payload: score,
});

export const setTurn = (player: string): setTurnActionType => ({
  type: scoreboardTypes.TURN,
  payload: player,
});

export const setScoreInputPlaceholder = (
  placeholder: string
): setTurnActionType => ({
  type: scoreboardTypes.SCORE_INPUT_PLACEHOLDER,
  payload: placeholder,
});

export const setScoreInputValue = (value: string): setTurnActionType => ({
  type: scoreboardTypes.SCORE_INPUT_VALUE,
  payload: value,
});
