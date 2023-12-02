import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useParams, NavLink } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../components/fetchFunction';
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLInkHref = useRef(location);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await fetchMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <Link to={backLInkHref.current.state?.from ?? '/'}>
          <b>Back to home</b>
        </Link>
      </div>

      {movieDetails.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
          alt={movieDetails.title}
        />
      )}

      <p>{movieDetails.overview}</p>
      <p>{movieDetails.genres.name}</p>

      <ul>
        <h3>Additional information</h3>
        <li>
          <NavLink to="cast">Credits</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
