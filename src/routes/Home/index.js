import React, { Component } from 'react';
import Chunk from 'components/Chunk';

const loadHomeContainer = (/* webpackChunkName: "home" */) => import('containers/Home');

class Home extends Component {
  render() {
    return <Chunk load={loadHomeContainer} />;
  }
}

export default Home;
