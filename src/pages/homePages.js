import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovie } from '../components/fetchFunction';

const HomePage = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMovie();
        setPopularMovie(response.results || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setPopularMovie([]);
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
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
