import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext()

const API_KEY = "ec696be1618e904704c7be1a8fe86470"

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(()=>{
        const fetchMovies = async()=>{
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            console.log(res.data.results)
            setMovies(res.data.results)
        };
        const fetchGenres = async()=>{
            const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
            console.log(res.data.genres)
            setGenres(res.data.genres)
        };
        fetchMovies();
        fetchGenres();
    },[])

    return (
        <MovieContext.Provider value={{movies}}>
            {children}
        </MovieContext.Provider>
    );
};

