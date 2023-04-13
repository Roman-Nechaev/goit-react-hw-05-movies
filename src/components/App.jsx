import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

// import PageNotFound from './error/PageNotFound';

const Home = lazy(() => import('../pages/home/Home'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const MovieDetails = lazy(() => import('../pages/movies/MovieDetails'));
const Cast = lazy(() => import('./main/Cast'));
const Reviews = lazy(() => import('./main/Reviews'));
const Layout = lazy(() => import('./layout/Layout'));

const PageNotFound = lazy(() => import('./error/PageNotFound'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="error" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
