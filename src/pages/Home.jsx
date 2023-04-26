import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
// import MovieCard from '../components/MovieCard';
import Slides from '../components/Slides';

const Home = () => {
  const { movies, loading } = useContext(MovieContext)

  if(loading){
    return <p>Loading movies...</p>
  }

  return (
    <div>
      <section>
        <h1>Popular Movies</h1>
        <div>
          <Slides movies={movies} />
          {/* {movies.map((movie)=>{
          return(
            <MovieCard key={movie.id} movie={movie} />
          )
        })} */}
        </div>
      </section>
      <section>
        <h1>Now Playing</h1>
        <div>
          <Slides movies={movies} />
          {/* {movies.map((movie)=>{
          return(
            <MovieCard key={movie.id} movie={movie} />
          )
        })} */}
        </div>
      </section>
      <section>
        <h1>Top Rated</h1>
        <div>
          <Slides movies={movies} />
          {/* {movies.map((movie)=>{
          return(
            <MovieCard key={movie.id} movie={movie} />
          )
        })} */}
        </div>
      </section>
      <section>
        <h1>Upcoming Movies</h1>
        <div>
          <Slides movies={movies} />
          {/* {movies.map((movie)=>{
          return(
            <MovieCard key={movie.id} movie={movie} />
          )
        })} */}
        </div>
      </section>

    </div>
  )
}

export default Home