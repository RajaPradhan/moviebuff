import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import Loading from "components/Loading";

import styles from "./styles.scss";

const TMDB_POSTER_URL = "https://image.tmdb.org/t/p/w342";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: ""
    };
  }
  componentDidMount() {
    const { id, movies } = this.props;
    const movie = _.find(movies[movies.moviesCategory]["results"], {
      id: Number(id)
    });

    this.setState({ movie });
  }

  render() {
    const { movie } = this.state;
    return (
      <div className="row">
        {movie && movie!= "" ? (
          <div>
            <div className="col s12 offset-m1 m4">
              <img
                src={`${TMDB_POSTER_URL}${movie["poster_path"]}`}
                alt="Movie Poster"
              />
            </div>
            <div className={`col s12 m7 ${styles["table-container"]}`}>
              <table>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{movie.title}</td>
                  </tr>
                  <tr>
                    <td>Rating</td>
                    <td>{movie["vote_average"]}</td>
                  </tr>
                  <tr>
                    <td>Release Date</td>
                    <td>{movie["release_date"]}</td>
                  </tr>
                  <tr>
                    <td>Plot</td>
                    <td>{movie.overview}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return { movies };
};

export default connect(mapStateToProps, null)(Details);
