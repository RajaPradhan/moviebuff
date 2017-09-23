import axios from "axios";

import * as types from "./types";

const HOST = "http://localhost:5000";

export const setMoviesCategory = moviesCategory => async dispatch => {
  dispatch({ type: types.SET_MOVIES_CATEGORY, payload: moviesCategory });
};

export const fetchNowPlayingMovies = () => async dispatch => {
  const res = await axios.get(`${HOST}/api/v1/movies/now-playing`);

  dispatch({ type: types.FETCH_NOW_PLAYING_MOVIES, payload: res.data });
};

export const fetchMostPopularMovies = () => async dispatch => {
  const res = await axios.get(`${HOST}/api/v1/movies/popular`);

  dispatch({ type: types.FETCH_MOST_POPULAR_MOVIES, payload: res.data });
};

export const fetchTopRatedMovies = () => async dispatch => {
  const res = await axios.get(`${HOST}/api/v1/movies/top-rated`);

  dispatch({ type: types.FETCH_TOP_RATED_MOVIES, payload: res.data });
};

export const fetchUpcomingMovies = () => async dispatch => {
  const res = await axios.get(`${HOST}/api/v1/movies/upcoming`);

  dispatch({ type: types.FETCH_UPCOMING_MOVIES, payload: res.data });
};

export const fetchMoviesByGenres = selectedMoviesGenres => async dispatch => {
  const res = await axios.get(
    `${HOST}/api/v1/movies/refine?with_genres=${selectedMoviesGenres}`
  );

  dispatch({ type: types.FETCH_MOVIES_BY_GENRES, payload: res.data });
};
