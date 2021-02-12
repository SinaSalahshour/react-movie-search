import React, { useState } from "react";

import MovieCard from "./MovieCard";
import { API_KEY } from "../creds/creds";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();

    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results.filter((movie) => movie.poster_path));
      // movies.filter((movie) => movie.poster_path);
    } catch (error) {
      console.log(error);
    }
  };

  const MoviesMap = () => {
    return movies.map((movie, index) => (
      <MovieCard movie={movie} key={index} />
    ));
  };

  return (
    <div className="movie-search-component">
      <div className="movie-search-title">React Movie Search App</div>
      <form className="movie-search-form" onSubmit={searchMovie}>
        <label htmlFor="query">Search Movie</label>
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="movie-card">{MoviesMap()}</div>
    </div>
  );
};

export default MovieSearch;
