import { Link, useLocation } from 'react-router-dom';
import {
  ContentWrapper,
  ImgCards,
  ImgWrapper,
  Li,
  LinkSt,
  OverviewCards,
  Release,
  Title,
  TitleCards,
  TitleWrapper,
  Ul,
} from './SearchMoviesItems.styled';

const SearchMoviesItems = ({ queryResultItems }) => {
  const location = useLocation();
  if (!queryResultItems) {
    return;
  }
  function formattingOverview(text) {
    let newFormat = text;
    if (newFormat.length > 80) {
      newFormat = text.slice(0, 90) + '...';
    }
    return newFormat;
  }

  return (
    <div>
      <ContentWrapper>
        <Ul>
          {queryResultItems.map(
            ({ id, title, poster_path, overview, release_date }) => (
              <Li key={id}>
                <LinkSt to={`${id}`} state={{ from: location }}>
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
                      {formattingOverview(overview)}
                    </OverviewCards>
                  </TitleWrapper>
                </LinkSt>
              </Li>
            )
          )}
        </Ul>
      </ContentWrapper>
    </div>
  );
};

export default SearchMoviesItems;
