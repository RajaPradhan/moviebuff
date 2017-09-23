import React, { Component } from 'react';
import Chunk from 'components/Chunk';

const loadDetailsContainer = (/* webpackChunkName: "details" */) => import('containers/Details');

class Details extends Component {
  render() {
    console.log('id-------------', this.props.match.params.id);
    return <Chunk load={loadDetailsContainer} id={this.props.match.params.id}/>;
  }
}

export default Details;
