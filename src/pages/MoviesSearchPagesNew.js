import React, { useState, useEffect } from 'react';
import { fetchSearchMovie } from 'components/fetchFunction';
import { Link } from 'react-router-dom';
const MovieSearchPage = () => {
  const [query, setQuery] = useState('');
  const [searchMovie, setSearchMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const fetchMovie = await fetchSearchMovie(query);
        setSearchMovie(fetchMovie);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchMovie();
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
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MovieSearchPage;
