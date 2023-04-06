import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { fetchPopularMovies } from '../../components/API/popularMoviesApi';
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
        console.log(results);
        setPopularMovies(results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  function formatingOverview(text) {
    let newFormat = text;
    if (newFormat.length > 80) {
      newFormat = text.slice(0, 90) + '...';
    }
    return newFormat;
  }

  return (
    <div>
      <Title>Trending today</Title>
      <ContentWrapper>
        {isLoading && (
          <>
            <div>Загружаем список фильмов isLoading</div>
          </>
        )}
        {error && (
          <>
            <div>Ошибка error</div>
          </>
        )}

        <Ul>
          {popularMovies.map(
            ({ id, title, poster_path, overview, release_date }) => {
              return (
                <Li key={id}>
                  <LinkSt to={`/movies/${id}`} state={{ from: location }}>
                    <ImgWrapper>
                      <ImgCards
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title}
                      />
                    </ImgWrapper>
                    <TitleWrapper>
                      <TitleCards>{title}</TitleCards>
                      <Release>{release_date}</Release>
                      <OverviewCards>
                        {formatingOverview(overview)}
                      </OverviewCards>
                    </TitleWrapper>
                  </LinkSt>
                </Li>
              );
            }
          )}
        </Ul>
      </ContentWrapper>
    </div>
  );
};

export default Home;
