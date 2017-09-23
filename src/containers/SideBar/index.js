import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import * as actions from "actions";

import baseStyles from "containers/App/styles.scss";

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovieCategory: "nowPlayingMovies",
      selectedMoviesGenres: []
    };

    this.handleMoviesCategoryChange = this.handleMoviesCategoryChange.bind(
      this
    );
    this.handleMoviesGenreSelection = this.handleMoviesGenreSelection.bind(
      this
    );
  }

  handleMoviesCategoryChange(event) {
    const selectedMovieCategory = event.target.value;
    this.setState({
      selectedMovieCategory
    });
    switch (selectedMovieCategory) {
      case "nowPlayingMovies":
        this.props.setMoviesCategory("nowPlayingMovies");
        this.props.fetchNowPlayingMovies();
        break;
      case "mostPopularMovies":
        this.props.setMoviesCategory("mostPopularMovies");
        this.props.fetchMostPopularMovies();
        break;
      case "topRatedMovies":
        this.props.setMoviesCategory("topRatedMovies");
        this.props.fetchTopRatedMovies();
        break;
      case "upcomingMovies":
        this.props.setMoviesCategory("upcomingMovies");
        this.props.fetchUpcomingMovies();
        break;
    }
  }

  addToSelectedMoviesGenres(genre) {
    let selectedMoviesGenres = this.state.selectedMoviesGenres;
    selectedMoviesGenres.push(genre);
    this.setState({
      selectedMoviesGenres
    });
    return selectedMoviesGenres;
  }

  removeFromSelectedMoviesGenres(genre) {
    let selectedMoviesGenres = this.state.selectedMoviesGenres;
    _.remove(selectedMoviesGenres, currentGenre => {
      return currentGenre === genre;
    });
    this.setState({
      selectedMoviesGenres
    });
    return selectedMoviesGenres;
  }

  handleMoviesGenreSelection(event) {
    const target = event.target;
    let selectedMoviesGenres = [];
    if (target.checked) {
      selectedMoviesGenres = this.addToSelectedMoviesGenres(target.value);
    } else {
      selectedMoviesGenres = this.removeFromSelectedMoviesGenres(target.value);
    }
    this.props.setMoviesCategory("moviesByGenres");
    this.props.fetchMoviesByGenres(selectedMoviesGenres.join(","));
  }

  render() {
    const { selectedMovieCategory } = this.state;

    return (
      <div
        className={classNames(
          "col offset-m1 m2",
          baseStyles["hide-on-small-to-med"]
        )}
        style={{ border: "1px solid #d4d1d1", backgroundColor: "#fff" }}
      >
        <h5>Filters</h5>
        <ul>
          <li>
            <input
              className="with-gap"
              name="moviesCategory"
              type="radio"
              id="nowPlayingMovies"
              value="nowPlayingMovies"
              checked={selectedMovieCategory === "nowPlayingMovies"}
              onChange={this.handleMoviesCategoryChange}
            />
            <label htmlFor="nowPlayingMovies">Now playing</label>
          </li>
          <li>
            <input
              className="with-gap"
              name="moviesCategory"
              type="radio"
              id="mostPopularMovies"
              value="mostPopularMovies"
              checked={selectedMovieCategory === "mostPopularMovies"}
              onChange={this.handleMoviesCategoryChange}
            />
            <label htmlFor="mostPopularMovies">Most popular</label>
          </li>
          <li>
            <input
              className="with-gap"
              name="moviesCategory"
              type="radio"
              id="topRatedMovies"
              value="topRatedMovies"
              checked={selectedMovieCategory === "topRatedMovies"}
              onChange={this.handleMoviesCategoryChange}
            />
            <label htmlFor="topRatedMovies">Top rated</label>
          </li>
          <li>
            <input
              className="with-gap"
              name="moviesCategory"
              type="radio"
              id="upcomingMovies"
              value="upcomingMovies"
              checked={selectedMovieCategory === "upcomingMovies"}
              onChange={this.handleMoviesCategoryChange}
            />
            <label htmlFor="upcomingMovies">Upcoming</label>
          </li>
        </ul>

        <p>Genres</p>
        <ul>
          <li>
            <input
              type="checkbox"
              className="filled-in"
              id="action"
              value="28"
              onChange={this.handleMoviesGenreSelection}
            />
            <label htmlFor="action">Action</label>
          </li>
          <li>
            <input
              type="checkbox"
              className="filled-in"
              id="adventure"
              value="12"
              onChange={this.handleMoviesGenreSelection}
            />
            <label htmlFor="adventure">Adventure</label>
          </li>
          <li>
            <input
              type="checkbox"
              className="filled-in"
              id="animation"
              value="16"
              onChange={this.handleMoviesGenreSelection}
            />
            <label htmlFor="animation">Animation</label>
          </li>
          <li>
            <input
              type="checkbox"
              className="filled-in"
              id="comedy"
              value="35"
              onChange={this.handleMoviesGenreSelection}
            />
            <label htmlFor="comedy">Comedy</label>
          </li>
          <li>
            <input
              type="checkbox"
              className="filled-in"
              id="crime"
              value="80"
              onChange={this.handleMoviesGenreSelection}
            />
            <label htmlFor="crime">Crime</label>
          </li>
          <li>
            <input
              type="checkbox"
              className="filled-in"
              id="documentry"
              value="99"
              onChange={this.handleMoviesGenreSelection}
            />
            <label htmlFor="documentry">Documentry</label>
          </li>
          <li>
            <input
              type="checkbox"
              className="filled-in"
              id="drama"
              value="18"
              onChange={this.handleMoviesGenreSelection}
            />
            <label htmlFor="drama">Drama</label>
          </li>
          <li>
            <input
              type="checkbox"
              className="filled-in"
              id="family"
              value="10751"
              onChange={this.handleMoviesGenreSelection}
            />
            <label htmlFor="family">Family</label>
          </li>
          <li>
            <input
              type="checkbox"
              className="filled-in"
              id="romance"
              value="10749"
              onChange={this.handleMoviesGenreSelection}
            />
            <label htmlFor="romance">Romance</label>
          </li>
          <li>
            <input
              type="checkbox"
              className="filled-in"
              id="thriller"
              value="53"
              onChange={this.handleMoviesGenreSelection}
            />
            <label htmlFor="thriller">Thriller</label>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return { movies };
};

const mapDispatchToProps = {
  setMoviesCategory: actions.setMoviesCategory,
  fetchNowPlayingMovies: actions.fetchNowPlayingMovies,
  fetchMostPopularMovies: actions.fetchMostPopularMovies,
  fetchTopRatedMovies: actions.fetchTopRatedMovies,
  fetchUpcomingMovies: actions.fetchUpcomingMovies,
  fetchMoviesByGenres: actions.fetchMoviesByGenres
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
