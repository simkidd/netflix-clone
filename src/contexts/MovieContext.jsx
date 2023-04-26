import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext()

const API_KEY = "ec696be1618e904704c7be1a8fe86470"
const base_url = "https://api.themoviedb.org/3"

export const MovieProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`${base_url}/movie/popular?api_key=${API_KEY}`)

                setMovies(res.data.results)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        fetchMovies()
    }, [])

    return (
        <MovieContext.Provider value={{ movies, loading }}>
            {children}
        </MovieContext.Provider>
    );
};

