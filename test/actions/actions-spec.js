import * as actions from "../../src/actions";
import * as types from "../../src/actions/types";

import axios from "axios";

describe("Action Creators", () => {
  let axiosGetStub;
  let res = {
    data: {}
  };

  const testFetchMoviesResults = (actionType, actionCreatorFn) => {
    res.data = {
      results: [
        {
          id: 346364
        }
      ]
    };
    const expectedAction = {
      type: actionType,
      payload: res.data
    };

    store
      .dispatch(actionCreatorFn())
      .then(() => {
        expect(store.getActions()[0].type).to.equal(expectedAction.type);
        expect(store.getActions()[0].payload.results.length).to.equal(1);
      })
      .catch();
  };

  beforeEach(() => {
    store.clearActions();

    const resolvedPromise = new Promise(resolve => {
      resolve(res);
    });
    axiosGetStub = stub(axios, "get").returns(resolvedPromise);
  });

  afterEach(() => {
    store.clearActions();
    axiosGetStub.restore();
  });

  it("should dispatch setMoviesCategory action", () => {
    const expectedAction = {
      type: types.SET_MOVIES_CATEGORY,
      payload: "nowPlayingMovies"
    };

    store
      .dispatch(actions.setMoviesCategory("nowPlayingMovies"))
      .then(() => {
        expect(store.getActions()[0].type).to.equal(expectedAction.type);
        expect(store.getActions()[0].payload).to.equal(expectedAction.payload);
      })
      .catch();
  });

  it("should dispatch fetchNowPlayingMovies action", () => {
    testFetchMoviesResults(types.FETCH_NOW_PLAYING_MOVIES, actions.fetchNowPlayingMovies);
  });

  it("should dispatch fetchMostPopularMovies action", () => {
    testFetchMoviesResults(types.FETCH_MOST_POPULAR_MOVIES, actions.fetchMostPopularMovies);
  });

  it("should dispatch fetchTopRatedMovies action", () => {
    testFetchMoviesResults(types.FETCH_TOP_RATED_MOVIES, actions.fetchTopRatedMovies);
  });

  it("should dispatch fetchUpcomingMovies action", () => {
    testFetchMoviesResults(types.FETCH_UPCOMING_MOVIES, actions.fetchUpcomingMovies);
  });

  it("should dispatch fetchMoviesByGenres action", () => {
    testFetchMoviesResults(types.FETCH_MOVIES_BY_GENRES, actions.fetchMoviesByGenres);
  });

  it("should dispatch fetchSearchResults action", () => {
    testFetchMoviesResults(types.FETCH_SEARCH_RESULTS, actions.fetchSearchResults);
  });
});
