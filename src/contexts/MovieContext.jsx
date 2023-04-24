import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext()

const API_KEY = "ec696be1618e904704c7be1a8fe86470"
const base_url = "https://api.themoviedb.org/3"

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesResponse = await axios.get(`${base_url}/movie/now_playing?api_key=${API_KEY}`);
                const popularMoviesResponse = await axios.get(`${base_url}/movie/popular?api_key=${API_KEY}`);
                const nowPlayingMoviesResponse = await axios.get(`${base_url}/movie/now_playing?api_key=${API_KEY}`);
                const topRatedMoviesResponse = await axios.get(`${base_url}/movie/top_rated?api_key=${API_KEY}`);
                const upcomingMoviesResponse = await axios.get(`${base_url}/movie/upcoming?api_key=${API_KEY}`);

                setMovies(moviesResponse.data.results)
                setPopularMovies(popularMoviesResponse.data.results);
                setNowPlayingMovies(nowPlayingMoviesResponse.data.results);
                setTopRatedMovies(topRatedMoviesResponse.data.results);
                setUpcomingMovies(upcomingMoviesResponse.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchMovies()
    }, [])

    return (
        <MovieContext.Provider value={{ movies, popularMovies, nowPlayingMovies, topRatedMovies, upcomingMovies }}>
            {children}
        </MovieContext.Provider>
    );
};

