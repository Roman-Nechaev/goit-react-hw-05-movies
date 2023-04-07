import { useRef, Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { fetchCompleteInformationAboutFilmApi } from 'components/API/completeInformationAboutFilmApi';
import {
  ContainerWrapperBgImage,
  ContainerCard,
  WrapperInfo,
  SectionInfo,
  ImgWrapper,
  Img,
  BgGradient,
  LinkSt,
  BackLink,
  SectionLink,
  UlLink,
} from './MovieDetails.styles';

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

  const { title, poster_path, overview, genres, vote_average, backdrop_path } =
    items;
  const voteAverage = Math.ceil(vote_average * 10);
  return (
    <div>
      <ContainerWrapperBgImage
        img={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
      >
        <BgGradient>
          <BackLink to={beckLinkLocationRef.current}>
            Назад к странице коллекции
          </BackLink>

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
              <ContainerCard>
                <ImgWrapper>
                  <Img
                    loading="lazy"
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                  />
                </ImgWrapper>
                <WrapperInfo>
                  <SectionInfo>
                    <h1>{title}</h1>

                    <p>User Scope: {voteAverage}%</p>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    {genres &&
                      genres.map(({ id, name }) => (
                        <span key={id}>{name} </span>
                      ))}
                  </SectionInfo>
                </WrapperInfo>
              </ContainerCard>
            </>
          )}
        </BgGradient>
      </ContainerWrapperBgImage>
      <SectionLink>
        <nav>
          <UlLink>
            <li>
              <LinkSt to="cast">
                <span>Cast</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </LinkSt>
            </li>
            <li>
              <LinkSt to="reviews">
                <span>Reviews</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </LinkSt>
            </li>
          </UlLink>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </SectionLink>
    </div>
  );
};

export default MovieDetails;
