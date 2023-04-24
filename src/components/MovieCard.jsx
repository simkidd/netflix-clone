import React from 'react';
import { Link } from 'react-router-dom';

const base_url = "https://image.tmdb.org/t/p/w200"

const MovieCard = ({ movie }) => {
  return (
    <div className='movie__card'>
        <img src={`${base_url}${movie.poster_path}`} alt="" />

      <div className='movie__card__content'>
        <Link to={`/movie/${movie.id}`}>
          <h3>{movie.title}</h3>
        </Link>
        <p>{new Date(movie.release_date).getFullYear()}</p>
      </div>
    </div>
  )
}

export default MovieCard