import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';
import Slides from '../components/Slides';

const Home = () => {
  const { movies } = useContext(MovieContext)
  return (
    <div>
      <h1>Home</h1>
      <div>
      <Slides movies={movies}  />
        {/* {movies.map((movie)=>{
          return(
            <MovieCard key={movie.id} movie={movie} />
          )
        })} */}
      </div>
    </div >
  )
}

export default Home