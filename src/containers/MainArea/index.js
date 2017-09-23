import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import Card from "components/Card";
import Loading from "components/Loading";
import * as actions from "actions";

class MainArea extends Component {
  componentDidMount() {
    this.props.fetchNowPlayingMovies();
  }

  renderCards(nowPlayingMovies) {
    return _.map(nowPlayingMovies.results, movie => (
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
    const { nowPlayingMovies } = this.props.movies;

    return (
      <div className="row">
        <div className="col s12 m8">
          <div
            className="row"
            style={{ border: "1px solid #d4d1d1", backgroundColor: "#fff" }}
          >
            {nowPlayingMovies.length > 0 ||
            (nowPlayingMovies.results && nowPlayingMovies.results.length) >
              0 ? (
              this.renderCards(nowPlayingMovies)
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
