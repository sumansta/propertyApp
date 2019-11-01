import urlConstants from './urlConstants';
import axios from 'axios';

export const fetchFavourites = async () => {
  return await axios.get(urlConstants.FAVOURITES);
};

export const fetchBestPicks = async () => {
  return await axios.get(urlConstants.BEST_PICKS);
};

export const fetchDetails = async id => {
  try {
    return await axios.get(urlConstants.DETAILS + id);
  } catch (e) {
    console.log(e);
  }
};
