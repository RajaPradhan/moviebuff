import axios from "axios";

import * as prodConfig from "config/prod";
import * as devConfig from "config/dev";

import * as types from "./types";

let API_HOST = "";
if (process.env.NODE_ENV === "production") {
  API_HOST = prodConfig.API_HOST;
} else {
  API_HOST = devConfig.API_HOST;
}

export const setMoviesCategory = moviesCategory => async dispatch => {
  dispatch({ type: types.SET_MOVIES_CATEGORY, payload: moviesCategory });
};

export const fetchNowPlayingMovies = () => async dispatch => {
  const res = await axios.get(`${API_HOST}/api/v1/movies/now-playing`);

  dispatch({ type: types.FETCH_NOW_PLAYING_MOVIES, payload: res.data });
};

export const fetchMostPopularMovies = () => async dispatch => {
  const res = await axios.get(`${API_HOST}/api/v1/movies/popular`);

  dispatch({ type: types.FETCH_MOST_POPULAR_MOVIES, payload: res.data });
};

export const fetchTopRatedMovies = () => async dispatch => {
  const res = await axios.get(`${API_HOST}/api/v1/movies/top-rated`);

  dispatch({ type: types.FETCH_TOP_RATED_MOVIES, payload: res.data });
};

export const fetchUpcomingMovies = () => async dispatch => {
  const res = await axios.get(`${API_HOST}/api/v1/movies/upcoming`);

  dispatch({ type: types.FETCH_UPCOMING_MOVIES, payload: res.data });
};

export const fetchMoviesByGenres = selectedMoviesGenres => async dispatch => {
  const res = await axios.get(
    `${API_HOST}/api/v1/movies/refine?with_genres=${selectedMoviesGenres}`
  );

  dispatch({ type: types.FETCH_MOVIES_BY_GENRES, payload: res.data });
};

export const fetchSearchResults = query => async dispatch => {
  const res = await axios.get(
    `${API_HOST}/api/v1/movies/search?query=${query}`
  );

  dispatch({ type: types.FETCH_SEARCH_RESULTS, payload: res.data });
};
