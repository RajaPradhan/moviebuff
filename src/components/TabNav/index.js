import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";

import * as actions from "actions";

import baseStyles from "containers/App/styles.scss";
import styles from "./styles.scss";

export class TabNav extends Component {
  constructor(props) {
    super(props);

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(event) {
    const selectedMovieCategory = event.target.textContent;

    switch (selectedMovieCategory) {
      case "Now playing":
        this.props.setMoviesCategory("nowPlayingMovies");
        this.props.fetchNowPlayingMovies();
        break;
      case "Top rated":
        this.props.setMoviesCategory("topRatedMovies");
        this.props.fetchTopRatedMovies();
        break;
      case "Upcoming":
        this.props.setMoviesCategory("upcomingMovies");
        this.props.fetchUpcomingMovies();
        break;
    }
  }

  render() {
    return (
      <div
        className={classNames(
          "row",
          baseStyles["hide-on-med-and-above"],
          styles["tabs-container"]
        )}
        style={{ color: "#fff" }}
      >
        <div className="col s12">
          <ul className={styles.tabs}>
            <Link to="/home">
              <li
                className={styles.tab}
                value="nowPlayingMovies"
                onClick={this.handleTabChange}
              >
                Now playing
              </li>
            </Link>
            <Link to="/home">
              <li
                className={styles.tab}
                value="topRatedMovies"
                onClick={this.handleTabChange}
              >
                Top rated
              </li>
            </Link>
            <Link to="/home">
              <li
                className={styles.tab}
                value="upcomingMovies"
                onClick={this.handleTabChange}
              >
                Upcoming
              </li>
            </Link>
          </ul>
        </div>
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
  fetchTopRatedMovies: actions.fetchTopRatedMovies,
  fetchUpcomingMovies: actions.fetchUpcomingMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(TabNav);
