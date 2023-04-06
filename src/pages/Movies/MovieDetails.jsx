import { useRef, Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { fetchCompleteInformationAboutFilmApi } from 'components/API/completeInformationAboutFilmApi';

/*/ 

 Поставить заглуши на изображения есть его нет


 Cтили

/*/

const MovieDetails = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();

  const beckLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const { moviesId } = useParams();

  useEffect(() => {
    if (!moviesId) {
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchCompleteInformationAboutFilmApi(moviesId);

        setItems(response);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [moviesId]);

  const { title, poster_path, overview, genres, vote_average } = items;
  const voteAverage = Math.ceil(vote_average * 10);
  return (
    <>
      <Link to={beckLinkLocationRef.current}>Назад к странице коллекции</Link>
      {error && (
        <>
          <div>Ошибка error</div>
        </>
      )}
      {isLoading && (
        <>
          <div>Загружаем информацию о фильме isLoading</div>
        </>
      )}

      {!error && !isLoading && (
        <>
          <div>
            <h1>{title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
            <p>User Scope: {voteAverage}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres &&
              genres.map(({ id, name }) => <span key={id}>{name} </span>)}
          </div>

          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
