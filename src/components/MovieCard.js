import React from "react";

import "./MovieCard.css"

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="poster-section">
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
      </div>
      <div className="info-section">
        <div className="movie-title">{movie.title}</div>
        <div className="grey-info">
          <div className="movie-release-date">
            Release Date: {movie.release_date}
          </div>
          <div className="movie-rating">Rating: {movie.vote_average}</div>
        </div>
        <div className="movie-desc">{movie.overview}</div>
      </div>
    </div>
  );
};

export default MovieCard;
