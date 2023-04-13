import notFound from '../img/not-found.png';

import { ImageError, Wrapper } from './PageNotFound.styled';

const PageNotFound = () => {
  return (
    <Wrapper>
      <ImageError src={notFound} width="350" alt="Page-Not-Found" />
    </Wrapper>
  );
};

export default PageNotFound;
