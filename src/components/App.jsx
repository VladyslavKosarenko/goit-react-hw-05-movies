import React, { Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const HomePage = lazy(() => import('../pages/HomePagesNew'));
const MovieSearchPage = lazy(() => import('../pages/MoviesSearchPagesNew'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsNew'));
const MovieCredits = lazy(() => import('../pages/MovieCreditsNew'));

const MovieReviews = lazy(() => import('../pages/MovieReviewsNew'));
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
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MovieSearchPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCredits />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
