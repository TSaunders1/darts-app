import { gameSetupTypes } from '../types/gameSetupTypes';

export type gameSetupStateInitialType = {
  player1Name: string;
  player2Name: string;
  gameMode: string;
  closeModal: boolean;
};

const INITIAL_STATE: gameSetupStateInitialType = {
  player1Name: '',
  player2Name: '',
  gameMode: '301',
  closeModal: false,
};

interface player1NameActionType {
  type: gameSetupTypes.PLAYER_1_NAME;
  payload: string;
}

interface player2NameActionType {
  type: gameSetupTypes.PLAYER_2_NAME;
  payload: string;
}

interface selectGameModeActionType {
  type: gameSetupTypes.SELECT_GAME_MODE;
  payload: string;
}

interface closeModalActionType {
  type: gameSetupTypes.CLOSE_MODAL;
  payload: boolean;
}

type actionType =
  | player1NameActionType
  | player2NameActionType
  | selectGameModeActionType
  | closeModalActionType;

export const gameSetupReducer = (state = INITIAL_STATE, action: actionType) => {
  switch (action.type) {
    case gameSetupTypes.PLAYER_1_NAME:
      return {
        ...state,
        player1Name: action.payload,
      };
    case gameSetupTypes.PLAYER_2_NAME:
      return {
        ...state,
        player2Name: action.payload,
      };
    case gameSetupTypes.SELECT_GAME_MODE:
      return {
        ...state,
        gameMode: action.payload,
      };
    case gameSetupTypes.CLOSE_MODAL:
      return {
        ...state,
        closeModal: action.payload,
      };
    default:
      return state;
  }
};
