import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "actions";

export class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    const keyCode = event.keyCode;
    if (keyCode === 13) {
      const value = event.target.value;
      this.props.setMoviesCategory("searchResults");
      this.props.fetchSearchResults(value);
    }
  }

  render() {
    return (
      <input
        type="search"
        placeholder="Search for Movies"
        onKeyUp={this.handleSearch}
      />
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return { movies };
};

const mapDispatchToProps = {
  setMoviesCategory: actions.setMoviesCategory,
  fetchSearchResults: actions.fetchSearchResults
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
