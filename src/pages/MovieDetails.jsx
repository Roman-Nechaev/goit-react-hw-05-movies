import { fetchCompleteInformationAboutFilmApi } from 'components/API/completeInformationAboutFilmApi';
import { useRef, Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();
  console.log(location);

  const beckLinkLjcationRef = useRef(location.state?.from ?? '/movies');
  const params = useParams();

  useEffect(() => {
    if (!params.moviesId) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetchCompleteInformationAboutFilmApi(
          params.moviesId
        );
        console.log(response);
        setItems(response);
      } catch (error) {}
    };

    fetchData();
  }, [params.moviesId]);

  const genres = items.genres;
  const voteAverage = Math.ceil(items.vote_average * 10);

  return (
    <>
      <h1>DogsDetails: {params.moviesId}</h1>
      <Link to={beckLinkLjcationRef.current}>Назад к странице коллекции</Link>

      <div>
        <h2>{items.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${items.poster_path}`}
          alt=""
        />
        <p>User Scope: {voteAverage}%</p>
        <h2>Overview</h2>

        <h3>Genres</h3>
        {genres && genres.map(({ id, name }) => <span key={id}>{name} </span>)}
      </div>

      {/* <ul>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
        <li>
          <Link to="subbreeds">Породы</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense> */}
    </>
  );
};

export default MovieDetails;
