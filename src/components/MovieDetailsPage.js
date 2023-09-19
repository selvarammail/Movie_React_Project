// src/components/MovieDetailsPage.js

import React from 'react';
import MovieCard from './MovieCard';
import './MovieDetailsPage.css'; // Uncomment this line to include the CSS file

const MovieDetailsPage = ({ selectedMovie }) => {
  return (
    <div className="movie-details-page">
      <header>
        <h2>Movie Details</h2>
      </header>
      <div className="movie-details">
        <MovieCard movie={selectedMovie} />
        <h3>Artists</h3>
        <ul>
          {selectedMovie.artists.map((artist) => (
            <li key={artist.artistid}>
              <img src={artist.profile_url} alt={`${artist.first_name} ${artist.last_name}`} />
              <p>
                {artist.first_name} {artist.last_name}
                <a href={artist.wiki_url} target="_blank" rel="noopener noreferrer">
                  (Wiki)
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
