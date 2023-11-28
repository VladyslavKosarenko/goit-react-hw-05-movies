import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePages';
import MovieSearchPage from '../pages/moviesSearchPages';
import MovieDetailsPage from '../pages/movieDetails';
import NotFaundPage from '../pages/notFaundPage';

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

            <li>
              <NavLink to="/movies/:movieId">Details</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MovieSearchPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
          <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
        </Route>
        <Route path="*" element={<NotFaundPage />} />
      </Routes>
    </div>
  );
};
