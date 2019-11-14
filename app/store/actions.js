/**
 * Action Types
 */

export const SAVE_FAVOURITES = 'SAVE_FAVOURITES';
export const SAVE_BEST_PICKS = 'SAVE_BEST_PICKS';
export const MARK_FAVOUTITES = 'MARK_FAVOUTITES';
export const SAVE_LOGIN = 'SAVE_LOGIN';

/**
 * Save Favourites Redux.
 *
 * @param {*} data
 */
export function saveFavourites(data) {
  return { type: SAVE_FAVOURITES, data };
}

/**
 * Save Best Picks Redux.
 *
 * @param {*} data
 */
export function saveBestPicks(data) {
  return { type: SAVE_BEST_PICKS, data };
}

/**
 * Save Mark Favourites Redux.
 *
 * @param {*} data
 */
export function markFavourites(data) {
  return { type: MARK_FAVOUTITES, data };
}

/**
 * Save  Login Redux.
 *
 * @param {*} data
 */
export function saveLogin(data) {
  return { type: SAVE_LOGIN, data };
}
