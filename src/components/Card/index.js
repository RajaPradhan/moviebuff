import React from "react";
import { Link } from "react-router-dom";

import Loading from "components/Loading";

import styles from "./styles.scss";

const TMDB_POSTER_URL = "https://image.tmdb.org/t/p/w154";

const Card = props => {
  const { id, votes, title, posterPath, overview, releaseDate } = props;
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <Link to={`movies/details/${id}`}>
            <img
              src={`${TMDB_POSTER_URL}${posterPath}`}
              alt="movie poster"
              width="154px"
              height="250px"
            />
          </Link>
          <a
            className="btn-floating halfway-fab waves-effect waves-light"
            style={{ textAlign: "center", backgroundColor: "#B1100C" }}
          >
            {votes ? votes : 0}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
