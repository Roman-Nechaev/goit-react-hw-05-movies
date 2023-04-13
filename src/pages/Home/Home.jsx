import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import fetchPopularMovies from '../../components/API/popularMoviesApi';
import FadingLoader from 'components/loading/FadingLoaderCard';
import checkPoster from 'components/utils/checkPoster';
import formattingOverview from 'components/utils/formattingOverview';

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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchPopularMovies();

        setPopularMovies(results);
      } catch {
        setError(true);
        navigate('/error', { replace: true });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <Container>
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
