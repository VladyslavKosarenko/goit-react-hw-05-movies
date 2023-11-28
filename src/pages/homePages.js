import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [popularMovie, setPopulsrMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '815be87df7ca36934ad03a6159bc2a6d';
      try {
        const fetchMovie = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
        );
        const response = fetchMovie.data;
        setPopulsrMovie(response.results || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setPopulsrMovie([]);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Popular Movies</h1>
      {popularMovie.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <ul>
          {popularMovie.map(movie => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
              <p>
                {movie.id}-{movie.title}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
