import { FETCH_NOW_PLAYING_MOVIES } from "actions/types";

const initialState = {
  nowPlayingMovies: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOW_PLAYING_MOVIES:
      return Object.assign({}, state, {
        nowPlayingMovies: action.payload
      });
    default:
      return state;
  }
};
