import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieSearchPage = () => {
  const [query, setQuery] = useState('');
  const [searchMovie, setSearchMovie] = useState([]);

  useEffect(() => {
    const fetchSearchMovie = async () => {
      const apiKey = '815be87df7ca36934ad03a6159bc2a6d';
      try {
        const fetchMovie = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
        );
        const response = fetchMovie.data;
        setSearchMovie(response.results || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setSearchMovie([]);
      }
    };
    fetchSearchMovie();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter a movie title"
      />
      <div>
        {searchMovie.length === 0 ? (
          <p>No movies found</p>
        ) : (
          <ul>
            {searchMovie.map(movie => (
              <li key={movie.id}>
                {movie.backdrop_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                )}
                <p>{movie.title}</p>
                <p>{movie.overview}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MovieSearchPage;
