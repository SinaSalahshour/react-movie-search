import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <h2 className="movie-title">{movie.title}</h2>
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={`${movie.title} poster`}/>
        </div>
    )
}

export default MovieCard
