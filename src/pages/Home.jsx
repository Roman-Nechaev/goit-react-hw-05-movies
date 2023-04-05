import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchPopularMovies } from '../components/API/popularMoviesApi';

const Home = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPopularMovies();
        console.log(response.results);
        setState(response.results);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {state.map(stat => (
          <li key={stat.id}>
            <Link to="movies">{stat.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
//  id title
