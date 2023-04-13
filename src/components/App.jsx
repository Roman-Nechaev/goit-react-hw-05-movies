import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import PageNotFound from './errorr/PageNotFound';

const Home = lazy(() => import('../pagesr/homer/Home'));
const Movies = lazy(() => import('../pagesr/moviesr/Movies'));
const MovieDetails = lazy(() => import('../pagesr/moviesr/MovieDetails'));
const Cast = lazy(() => import('./mainr/Cast'));
const Reviews = lazy(() => import('./mainr/Reviews'));
const Layout = lazy(() => import('./layoutr/Layout'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="error" element={<PageNotFound />} />
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
