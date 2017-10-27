import * as actions from '../../src/actions';
import * as types from '../../src/actions/types';

import axios from 'axios';

describe('Action Creators', () => {
  it('should dispatch setMoviesCategory action', () => {
    const expectedAction = {
      type: types.SET_MOVIES_CATEGORY,
      payload: 'nowPlayingMovies'
    };

    store.dispatch(actions.setMoviesCategory('nowPlayingMovies'))
    .then(() => {
      expect(store.getActions()[0].type).to.equal(expectedAction.type);
      expect(store.getActions()[0].payload).to.equal(expectedAction.payload);
      store.clearActions();
    })
    .catch();
  });
});
