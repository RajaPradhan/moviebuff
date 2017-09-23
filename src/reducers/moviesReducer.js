import {
  SET_MOVIES_CATEGORY,
  FETCH_NOW_PLAYING_MOVIES,
  FETCH_MOST_POPULAR_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  FETCH_UPCOMING_MOVIES,
  FETCH_MOVIES_BY_GENRES
} from "actions/types";

const initialState = {
  moviesCategory: "nowPlayingMovies",
  nowPlayingMovies: [],
  mostPopularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  moviesByGenres: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES_CATEGORY:
      return Object.assign({}, state, {
        moviesCategory: action.payload
      });
      break;
    case FETCH_NOW_PLAYING_MOVIES:
      return Object.assign({}, state, {
        nowPlayingMovies: action.payload
      });
      break;
    case FETCH_MOST_POPULAR_MOVIES:
      return Object.assign({}, state, {
        mostPopularMovies: action.payload
      });
      break;
    case FETCH_TOP_RATED_MOVIES:
      return Object.assign({}, state, {
        topRatedMovies: action.payload
      });
      break;
    case FETCH_UPCOMING_MOVIES:
      return Object.assign({}, state, {
        upcomingMovies: action.payload
      });
      break;
    case FETCH_MOVIES_BY_GENRES:
      return Object.assign({}, state, {
        moviesByGenres: action.payload
      });
      break;
    default:
      return state;
  }
};
