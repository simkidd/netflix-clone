import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../contexts/MovieContext';
import axios from 'axios';
import '../styles/movie.scss'

const base_url = "https://image.tmdb.org/t/p/original";
const API_KEY = "ec696be1618e904704c7be1a8fe86470"

const Movie = () => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);
  const { id } = useParams();
  const { movies } = useContext(MovieContext);

  const movie = movies.find((movie) => movie.id === parseInt(id))

  useEffect(() => {
    const fetchTrailerKey = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
      const videos = res.data.results;
      const trailer = videos.find((video) => video.type === "Trailer" && video.site === "YouTube");
      if (trailer) {
        setTrailerKey(trailer.key);
      }
    };
    fetchTrailerKey();
  }, [id]);

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  return (
    <div className='movie__page'>
      <div className="movie__page__container"
        style={{ backgroundImage: `url(${base_url}${movie.backdrop_path})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "left calc((50vw - 170px) - 340px) top" }}
      >
        <div className="custom__bg">
          <div className="movie__poster">
            <img src={`${base_url}${movie.poster_path}`} alt="" />
          </div>
          <div className="movie__details">
            <h1>{movie.title}</h1>
            <p>Released: {movie.release_date}</p>
            <p>{movie.overview}</p>
            <button onClick={toggleTrailer}>Play Trailer</button>
          </div>
        </div>
      </div>

      {showTrailer && (
        <div className="trailer__modal">
          <div className="trailer__modal__content">
            <button onClick={toggleTrailer}>Close</button>
            {trailerKey ? (
              <iframe
                title={`${movie.title} Trailer`}
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            ) : (
              <p>No trailer available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Movie