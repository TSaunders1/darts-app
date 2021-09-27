import { scoreboardTypes } from '../types/scoreboardTypes';

type scoreboardStateInitialType = {
  player1Total: number;
  player2Total: number;
  player1TotalList: number[];
  player2TotalList: number[];
  turn: string;
  scoreInputPlaceholder: string;
  scoreInputValue: string;
};

const INITIAL_STATE: scoreboardStateInitialType = {
  player1Total: 0,
  player2Total: 0,
  player1TotalList: [],
  player2TotalList: [],
  turn: 'player1',
  scoreInputPlaceholder: 'Player 1 Score',
  scoreInputValue: '',
};

interface player1TotalActionType {
  type: scoreboardTypes.PLAYER_1_TOTAL;
  payload: number;
}

interface player2TotalActionType {
  type: scoreboardTypes.PLAYER_2_TOTAL;
  payload: number;
}

interface player1TotalListActionType {
  type: scoreboardTypes.PLAYER_1_TOTAL_LIST;
  payload: number;
}

interface player2TotalListActionType {
  type: scoreboardTypes.PLAYER_2_TOTAL_LIST;
  payload: number;
}

interface turnActionType {
  type: scoreboardTypes.TURN;
  payload: string;
}

interface scoreInputPlaceholderActionType {
  type: scoreboardTypes.SCORE_INPUT_PLACEHOLDER;
  payload: string;
}

interface scoreInputValueActionType {
  type: scoreboardTypes.SCORE_INPUT_VALUE;
  payload: string;
}

type actionType =
  | player1TotalActionType
  | player2TotalActionType
  | player1TotalListActionType
  | player2TotalListActionType
  | turnActionType
  | scoreInputPlaceholderActionType
  | scoreInputValueActionType;

export const scoreboardReducer = (
  state = INITIAL_STATE,
  action: actionType
) => {
  switch (action.type) {
    case scoreboardTypes.PLAYER_1_TOTAL:
      return {
        ...state,
        player1Total: action.payload,
      };
    case scoreboardTypes.PLAYER_2_TOTAL:
      return {
        ...state,
        player2Total: action.payload,
      };
    case scoreboardTypes.PLAYER_1_TOTAL_LIST:
      return {
        ...state,
        player1TotalList: [...state.player1TotalList, action.payload],
      };
    case scoreboardTypes.PLAYER_2_TOTAL_LIST:
      return {
        ...state,
        player2TotalList: [...state.player2TotalList, action.payload],
      };
    case scoreboardTypes.TURN:
      return {
        ...state,
        turn: action.payload,
      };
    case scoreboardTypes.SCORE_INPUT_PLACEHOLDER:
      return {
        ...state,
        scoreInputPlaceholder: action.payload,
      };
    case scoreboardTypes.SCORE_INPUT_VALUE:
      return {
        ...state,
        scoreInputValue: action.payload,
      };
    default:
      return state;
  }
};
