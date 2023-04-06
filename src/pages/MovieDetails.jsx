import { useRef, Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { fetchCompleteInformationAboutFilmApi } from 'components/API/completeInformationAboutFilmApi';

/*/ 
 обработать ошибки  
 Поставить заглуши на изображения есть его нет
  Поставить заглуши если нет информации 
 деструктуризация
стили

/*/

const MovieDetails = () => {
  const [items, setItems] = useState([]);

  const location = useLocation();

  const beckLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const { moviesId } = useParams();

  useEffect(() => {
    if (!moviesId) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetchCompleteInformationAboutFilmApi(moviesId);

        setItems(response);
      } catch (error) {}
    };

    fetchData();
  }, [moviesId]);

  const genres = items.genres;
  const voteAverage = Math.ceil(items.vote_average * 10);

  return (
    <>
      <Link to={beckLinkLocationRef.current}>Назад к странице коллекции</Link>

      <div>
        <h1>{items.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${items.poster_path}`}
          alt={items.title}
        />
        <p>User Scope: {voteAverage}%</p>
        <h2>Overview</h2>
        <p>{items.overview}</p>
        <h3>Genres</h3>
        {genres && genres.map(({ id, name }) => <span key={id}>{name} </span>)}
      </div>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};

export default MovieDetails;
