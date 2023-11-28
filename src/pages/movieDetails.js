import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const apiKey = '815be87df7ca36934ad03a6159bc2a6d';

    const fetchMovieDetails = async () => {
      try {
        const movieDetailsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );
        setMovieDetails(movieDetailsResponse.data);

        const castResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
        );
        setCast(castResponse.data.cast);

        const reviewsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
        );
        setReviews(reviewsResponse.data.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {movieDetails.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
          alt={movieDetails.title}
        />
      )}

      <p>{movieDetails.overview}</p>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
