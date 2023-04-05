import axios from 'axios';
import { API_KEY } from '../../KEY/movieKey';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day';

export const fetchPopularMovies = async () => {
  const response = await axios.get('', {
    params: {
      api_key: API_KEY,
    },
  });
  console.log(response);
  return response.data;
};
