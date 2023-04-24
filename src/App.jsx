import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.scss';
import Header from './components/Header'
import Home from './pages/Home';
import Movie from './pages/Movie';
import SearchResults from './pages/SearchResults';
import { MovieContext } from './contexts/MovieContext';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const { movies } = useContext(MovieContext)

  const handleSearch = (query) => {
    const filteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(query.toLowerCase())
    })
    setSearchResults(filteredMovies)
    setSearchQuery(query)
  }

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="search" element={<SearchResults results={searchResults} query={searchQuery} />} />
      </Routes>
    </Router>
  );
};

export default App;
