import urlConstants from './urlConstants';
import axios from 'axios';

export const fetchFavourites = async () => {
  await axios.get(urlConstants.FAVOURITES);

  return;
};

export const fetchBestPicks = async () => {
  await axios.get(urlConstants.BEST_PICKS);

  return;
};

export const fetchDetails = async id => {
  try {
    return await axios.get(urlConstants.DETAILS + id);
  } catch (e) {}
};
