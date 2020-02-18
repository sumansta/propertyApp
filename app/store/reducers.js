import {
  SAVE_FAVOURITES,
  SAVE_BEST_PICKS,
  MARK_FAVOUTITES,
  SAVE_LOGIN,
} from './actions';

const INITIAL_STATE = {
  favourites: [],
  bestPicks: [],
  loggedIn: false,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_FAVOURITES:
      return { ...state, favourites: action.data };
    case SAVE_BEST_PICKS:
      return { ...state, bestPicks: action.data };
    case MARK_FAVOUTITES:
      return { ...state, favourites: action.data };
    case SAVE_LOGIN:
      return { ...state, loggedIn: action.data };
    default:
      return state;
  }
};

export default rootReducer;
