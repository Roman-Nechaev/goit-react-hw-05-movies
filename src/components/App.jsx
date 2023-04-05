import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetails />}>
            {/* <Route path="gallery" element={<Gallery />} /> */}
            {/* <Route path="subbreeds" element={<SubBreeds />} /> */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
