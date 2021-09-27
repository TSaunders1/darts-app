import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { scoreboardReducer } from './reducers/scoreboardReducer';
import { gameSetupReducer } from './reducers/gameSetupReducer';

const logger = createLogger();

const rootReducer = combineReducers({ gameSetupReducer, scoreboardReducer });

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof rootReducer>;
