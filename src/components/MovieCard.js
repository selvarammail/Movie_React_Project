// src/components/MovieCard.js

import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster_url} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>Duration: {movie.duration} mins</p>
      <p>Critic Rating: {movie.critic_rating}</p>
      <button>Book now</button>
    </div>
  );
};

export default MovieCard;
