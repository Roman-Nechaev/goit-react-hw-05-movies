import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { fetchPopularMovies } from '../components/API/popularMoviesApi';

const Home = () => {
  const [state, setState] = useState([]);
  const [filmId, setFilmId] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPopularMovies();

        setState(response.results);
      } catch (error) {}
    };

    fetchData();
  }, []);

  const giveId = id => {
    setFilmId(id);
  };

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {state.map(stat => {
          return (
            <li key={stat.id}>
              <Link
                onClick={() => {
                  giveId(stat.id);
                }}
                to={`/movies/${stat.id}`}
                state={{ from: location }}
              >
                {stat.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
//  id title
