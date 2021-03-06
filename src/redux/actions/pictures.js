import axios from 'axios';

import toggleSpinner from './spinner';
import addError from './error';
import actions from './index';

const { REACT_APP_API_KEY } = process.env;

export const addPicture = payload => ({
  type: actions.ADD_PICTURE,
  payload,
});

export const getPicture = date => async dispatch => {
  try {
    dispatch(toggleSpinner());
    dispatch(addError(null));

    const { data } = axios.get(`https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}&date=${date}`);
    dispatch(addPicture(data));
    dispatch(toggleSpinner());
  } catch (error) {
    const { response, message } = error;
    if (!response) {
      dispatch(addError(message));
    } else {
      const { message } = response;
      dispatch(addError(message));
    }
    dispatch(toggleSpinner());
  }
};

export const addFavorite = payload => ({
  type: actions.ADD_FAVORITE,
  payload,
});

export const removeFavorite = payload => ({
  type: actions.REMOVE_FAVORITE,
  payload,
});
