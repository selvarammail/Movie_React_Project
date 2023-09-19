// src/components/MovieList.js

import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies, onMovieCardClick }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.movieid} onClick={() => onMovieCardClick(movie)}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
