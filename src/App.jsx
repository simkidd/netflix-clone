import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.scss';
import Header from './components/Header'
import Home from './pages/Home';
import Movie from './pages/Movie';
import SearchResults from './pages/SearchResults';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/:id" element={<Movie />} />
        <Route path="search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
};

export default App;
