import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import hook from 'css-modules-require-hook';
import sass from 'node-sass';

import chai, { expect } from 'chai';
import { sinon, spy, stub } from 'sinon';
import sinonChai from 'sinon-chai';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import _ from 'lodash';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  moviesCategory: "nowPlayingMovies",
  nowPlayingMovies: [],
  mostPopularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  moviesByGenres: [],
  searchResults: []
});

global.store = store;

// Provides a set of custom assertions for using the Sinon.JS spy, stub, and
// mocking framework with the Chai assertion library
chai.use(sinonChai);

global.expect = expect;
global.sinon = sinon;
global.spy = spy;
global.stub = stub;

global.shallow = shallow;
global.mount = mount;
global.render = render;

global._ = _;

// Required by Mocha to handle css and scss files
hook({
  extensions: [ '.css', '.scss' ],
  preprocessCss: data => sass.renderSync({ data }).css
})

// Prevent mocha from interpreting CSS @import files
function noop() {
  return null;
}

require.extensions['.css', '.scss', '.jpg'] = noop;

// Configure enzyme with an adapter
Enzyme.configure({adapter: new Adapter()});

const renderComponent = (renderType, Component, props) => {
  const wrapper = renderType(
    <Component {...props} />
  );

  return wrapper;
};

global.renderComponent = renderComponent;
