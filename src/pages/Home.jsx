import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';
import Slides from '../components/Slides';

const Home = () => {
  const { popularMovies, nowPlayingMovies, topRatedMovies, upcomingMovies } = useContext(MovieContext)
  return (
    <div>
      <section>
        <h1>Popular Movies</h1>
        <div>
          <Slides movies={popularMovies} />
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
          <Slides movies={nowPlayingMovies} />
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
          <Slides movies={topRatedMovies} />
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
          <Slides movies={upcomingMovies} />
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