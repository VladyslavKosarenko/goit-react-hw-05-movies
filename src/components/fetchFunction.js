import axios from 'axios';

const apiKey = '815be87df7ca36934ad03a6159bc2a6d';

export const fetchMovie = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const fetchMovieDetails = async movieId => {
  try {
    const castResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
    );

    return castResponse.data.cast;
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const reviewsResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
    );
    const response = reviewsResponse.data.results;

    return response;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
  }
};
