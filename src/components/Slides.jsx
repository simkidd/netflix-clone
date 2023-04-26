import React from 'react'
import Slider from 'react-slick'
//import css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from './MovieCard';

const Slides = ({ movies }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
        ]
    };
    return (
        <>
            <Slider {...settings}>
                {movies.map((movie) => {
                    return (
                        <MovieCard movie={movie} key={movie.id} />
                    )
                })}
            </Slider>
        </>
    )
}

export default Slides