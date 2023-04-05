import axios from 'axios';
import { API_KEY } from '../../KEY/movieKey';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

export const fetchSearchMovies = async search => {
  const response = await axios.get(BASE_URL, {
    params: {
      api_key: API_KEY,
      query: search,
    },
  });

  return response.data;
};
