import notFound from '../Img/pngwing.com (1).png';
import { ImageError, Wrapper } from './PageNotFound.styled';

const PageNotFound = () => {
  return (
    <Wrapper>
      <ImageError src={notFound} width="350" alt="PageNotFound" />
    </Wrapper>
  );
};

export default PageNotFound;
