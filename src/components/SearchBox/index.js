import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "actions";

class SearchBox extends Component {
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
        type="text"
        placeholder="Search for Movies, People, TV Shows"
        style={{
          border: "1px solid #fff",
          padding: "0 12px",
          color: "#000",
          backgroundColor: "#fff",
          borderRadius: "2px",
          height: "38px"
        }}
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
