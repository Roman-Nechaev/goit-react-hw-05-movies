import axios from 'axios';
import { API_KEY } from '../../KEY/movieKey';

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';

export const fetchPopularMovies = async () => {
  const response = await axios.get(BASE_URL, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
};
