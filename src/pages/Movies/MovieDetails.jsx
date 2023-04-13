import { useRef, Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';

import fetchCompleteInformationAboutFilmApi from 'components/API/completeInformationAboutFilmApi';

import checkPoster from 'components/utils/checkPoster';

import SpinnersLoader from 'components/loading/SpinnersLoader';
import LoaderMovieDetails from 'components/loading/LoaderMovieDetails';
import convertGenres from 'components/utils/convertGenres';

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
  AiOutlineArrowLeftSt,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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
        navigate('/error', { replace: true });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [moviesId, navigate]);

  const { title, poster_path, overview, genres, vote_average, backdrop_path } =
    items;

  const voteAverage = Math.ceil(vote_average * 10);

  return (
    <div>
      <ContainerWrapperBgImage
        img={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
      >
        <BgGradient>
          {isLoading && <LoaderMovieDetails />}

          {!error && !isLoading && (
            <>
              <BackLink to={beckLinkLocationRef.current}>
                <AiOutlineArrowLeftSt />
                <span>Go back</span>
              </BackLink>
              <ContainerCard>
                <ImgWrapper>
                  <Img
                    loading="lazy"
                    src={checkPoster(poster_path)}
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
                    {genres && <span>{convertGenres(genres)}</span>}
                  </SectionInfo>
                </WrapperInfo>
              </ContainerCard>
            </>
          )}
        </BgGradient>
      </ContainerWrapperBgImage>
      {!error && (
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

          <Suspense fallback={<SpinnersLoader />}>
            <Outlet />
          </Suspense>
        </SectionLink>
      )}
    </div>
  );
};

export default MovieDetails;
