import axios from 'axios';

import * as types from './types';

const HOST = 'http://localhost:5000';

export const fetchNowPlayingMovies = () => async dispatch => {
  const res = await axios.get(`${HOST}/api/v1/movies/now-playing`);

  dispatch({ type: types.FETCH_NOW_PLAYING_MOVIES, payload: res.data });
};
