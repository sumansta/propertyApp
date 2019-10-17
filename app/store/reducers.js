import {SAVE_FAVOURITES, SAVE_BEST_PICKS, MARK_FAVOUTITES} from './actions';

const INITIAL_STATE = {
  favourites: [],
  bestPicks: [],
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_FAVOURITES:
      return {...state, favourites: action.data};
    case SAVE_BEST_PICKS:
      return {...state, bestPicks: action.data};
    case MARK_FAVOUTITES:
      return {...state, favourites: action.data};
    default:
      return state;
  }
};

export default rootReducer;
