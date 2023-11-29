import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePages';
import MovieSearchPage from '../pages/MoviesSearchPages';
import MovieDetailsPage from '../pages/MovieDetails';
import MovieCredits from '../pages/MovieCredits';
import MovieReviews from '../pages/MovieReviews';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Search</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MovieSearchPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCredits />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Routes>
    </div>
  );
};
