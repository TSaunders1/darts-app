import { gameSetupTypes } from '../types/gameSetupTypes';

type setPlayerNameActionType = {
  type: string; // would need to be an enum not a string since it will be a constant
  payload: string;
};

type setGameModeActionType = {
  type: string;
  payload: string;
};

type setCloseModalActionType = {
  type: string;
  payload: boolean;
};

export const setPlayer1Name = (text: string): setPlayerNameActionType => ({
  type: gameSetupTypes.PLAYER_1_NAME,
  payload: text,
});

export const setPlayer2Name = (text: string): setPlayerNameActionType => ({
  type: gameSetupTypes.PLAYER_2_NAME,
  payload: text,
});

export const setGameMode = (value: string): setGameModeActionType => ({
  type: gameSetupTypes.SELECT_GAME_MODE,
  payload: value,
});

export const setCloseModal = (event: boolean): setCloseModalActionType => ({
  type: gameSetupTypes.CLOSE_MODAL,
  payload: event,
});
