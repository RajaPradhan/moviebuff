import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import Card from "components/Card";
import Loading from "components/Loading";
import * as actions from "actions";

export class MainArea extends Component {
  componentDidMount() {
    this.props.fetchNowPlayingMovies();
  }

  renderCards(movies) {
    return _.map(movies.results, movie => (
      <Card
        key={movie.id}
        id={movie.id}
        votes={movie["vote_average"]}
        title={movie.title}
        posterPath={movie["poster_path"]}
        overview={movie.overview}
        releaseDate={movie["release_date"]}
      />
    ));
  }

  render() {
    const { moviesCategory } = this.props.movies;
    const movies = this.props.movies[moviesCategory];

    return (
      <div className="row">
        <div className="col s12 m8">
          <div
            className="row"
            style={{ border: "1px solid #d4d1d1", backgroundColor: "#fff" }}
          >
            {movies.length > 0 ||
            (movies.results && movies.results.length) >
              0 ? (
              this.renderCards(movies)
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return { movies };
};

const mapDispatchToProps = {
  fetchNowPlayingMovies: actions.fetchNowPlayingMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(MainArea);
