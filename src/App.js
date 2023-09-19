// src/App.js

import React, { useState } from 'react';
import MovieList from './components/MovieList';
import MovieDetailsPage from './components/MovieDetailsPage';
import './App.css'; // You can create a CSS file for styling

// Import JSON data with relative paths
import moviesData from './data/moviesdb/movies.json';

function App() {
  const movies = moviesData;
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Function to handle movie card click
  const handleMovieCardClick = (movie) => {
    setSelectedMovie(movie);
  };

   // Function to handle "Home" button click
   const handleHomeButtonClick = () => {
    window.location.reload(); // Refresh the page
   };
   
  return (
    <div className="App">
      <header>
        <h2>Movie Booking App</h2>
        <div className="header-buttons">
          <button onClick={handleHomeButtonClick}>Home</button>
          <button>Login</button>
          <button>Book now</button>
        </div>
      </header>
      {selectedMovie ? (
        <MovieDetailsPage selectedMovie={selectedMovie} />
      ) : (
        <MovieList movies={movies} onMovieCardClick={handleMovieCardClick} />
      )}
    </div>
  );
}

export default App;

