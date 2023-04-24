import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../contexts/MovieContext';

const base_url = "https://image.tmdb.org/t/p/w500"

const Movie = () => {
  const { id } = useParams();
  const { movies } = useContext(MovieContext);

  const movie = movies.find((movie) => movie.id === parseInt(id))

  return (
    <div className='movie__page'>
      <div className="movie__page__container">
        <div className="movie__poster">
          <img src={`${base_url}${movie.poster_path}`} alt="" />
        </div>
        <div className="movie__details">
          <h1>{movie.title}</h1>
          <p>Released: {movie.release_date}</p>
        </div>
      </div>
    </div>
  )
}

export default Movie