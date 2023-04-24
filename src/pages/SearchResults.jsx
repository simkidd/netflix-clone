import React from 'react'
import MovieCard from '../components/MovieCard'

const SearchResults = ({ query, results }) => {
  return (
    <div className='search__results'>
      <h2>Search Results for "{query}"</h2>
      {results.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className='movie__list'>
          {results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchResults