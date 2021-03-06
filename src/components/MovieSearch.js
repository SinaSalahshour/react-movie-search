import React, { useState } from "react";

import MovieCard from "./MovieCard";
import { API_KEY } from "../creds/creds";
import "./MovieSearch.css";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState("");

  const searchMovie = async (e) => {
    e.preventDefault();

    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`;
      const res = await fetch(url);
      setState(res);
      const data = await res.json();
      console.log(data);
      setMovies(data.results.filter((movie) => movie.poster_path));
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
      <>
        {!state ? (
          <div className="info-div">
            <div className="tagline-div">
              Look for your preferred movie, with just a click
            </div>
            <div className="desc-div">
              Cinephiles club is a movie database with information about almost
              every movie you would like to check out. All you have to do is to
              type in the name.
            </div>
          </div>
        ) : (
          ""
        )}
        <form className="movie-search-form" onSubmit={searchMovie}>
          <input
            className="search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="i.e. Star Wars"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="movie-cards-div">{MoviesMap()}</div>
      </>
    </div>
  );
};

export default MovieSearch;
