import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import checkPoster from 'components/utils/checkPoster';
import formattingOverview from 'components/utils/formattingOverview';

import {
  ContentWrapper,
  ImgCards,
  ImgWrapper,
  Li,
  LinkSt,
  OverviewCards,
  Release,
  TitleCards,
  TitleWrapper,
  Ul,
} from './SearchMoviesItems.styled';

const SearchMoviesItems = ({ queryResultItems }) => {
  const location = useLocation();
  if (!queryResultItems) {
    return;
  }

  return (
    <ContentWrapper>
      <Ul>
        {queryResultItems.map(
          ({ id, title, poster_path, overview, release_date }) => (
            <Li key={id}>
              <LinkSt to={`${id}`} state={{ from: location }}>
                <ImgWrapper>
                  <ImgCards src={checkPoster(poster_path)} alt={title} />
                </ImgWrapper>
                <TitleWrapper>
                  <TitleCards>{title}</TitleCards>
                  <Release>{release_date}</Release>
                  <OverviewCards>{formattingOverview(overview)}</OverviewCards>
                </TitleWrapper>
              </LinkSt>
            </Li>
          )
        )}
      </Ul>
    </ContentWrapper>
  );
};

export default SearchMoviesItems;

SearchMoviesItems.propTypes = {
  queryResultItems: PropTypes.array.isRequired,
};
