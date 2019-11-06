/**
 * Action Types
 */

export const SAVE_FAVOURITES = 'SAVE_FAVOURITES';
export const SAVE_BEST_PICKS = 'SAVE_BEST_PICKS';
export const MARK_FAVOUTITES = 'MARK_FAVOUTITES';
export const SAVE_LOGIN = 'SAVE_LOGIN';

/**
 * Action Creators
 */
export function saveFavourites(data) {
  return {type: SAVE_FAVOURITES, data};
}

export function saveBestPicks(data) {
  return {type: SAVE_BEST_PICKS, data};
}

export function markFavourites(data) {
  return {type: MARK_FAVOUTITES, data};
}

export function saveLogin(data) {
  return {type: SAVE_LOGIN, data};
}
