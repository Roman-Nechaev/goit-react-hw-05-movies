import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import fetchPopularMovies from '../../components/API/popularMoviesApi';
import PageNotFound from 'components/Error/PageNotFound';
import FadingLoader from 'components/Loading/FadingLoaderCard';
import checkPoster from 'components/Utils/checkPoster';
import formattingOverview from 'components/Utils/formattingOverview';

import {
  ContentWrapper,
  ImgCards,
  ImgWrapper,
  Li,
  Title,
  Ul,
  LinkSt,
  TitleCards,
  OverviewCards,
  TitleWrapper,
  Release,
  Container,
} from './Home.styles';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchPopularMovies();

        setPopularMovies(results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      {error && <PageNotFound />}
      {!error && <Title>Trending today</Title>}
      {!error && (
        <ContentWrapper>
          {isLoading && <FadingLoader />}
          {!isLoading && (
            <Ul>
              {popularMovies.map(
                ({ id, title, poster_path, overview, release_date }) => {
                  return (
                    <Li key={id}>
                      <LinkSt to={`/movies/${id}`} state={{ from: location }}>
                        <ImgWrapper>
                          <ImgCards
                            loading="lazy"
                            src={checkPoster(poster_path)}
                            alt={title}
                          />
                        </ImgWrapper>
                        <TitleWrapper>
                          <TitleCards>{title}</TitleCards>
                          <Release>{release_date}</Release>
                          <OverviewCards>
                            {formattingOverview(overview)}
                          </OverviewCards>
                        </TitleWrapper>
                      </LinkSt>
                    </Li>
                  );
                }
              )}
            </Ul>
          )}
        </ContentWrapper>
      )}
    </Container>
  );
};

export default Home;
