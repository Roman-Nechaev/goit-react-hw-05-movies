import React from 'react';
// import ContentLoader from 'react-content-loader';
import {
  WrapperFadingLoader,
  ContentLoaderSt,
} from './FadingLoaderCard.styled';

const FadingLoader = () => {
  return (
    <WrapperFadingLoader>
      <FadingLoaderCard1 />
      <FadingLoaderCard2 />
      <FadingLoaderCard3 />
      <FadingLoaderCard4 />
      <FadingLoaderCard5 />
    </WrapperFadingLoader>
  );
};

const FadingLoaderCard1 = () => {
  return (
    <ContentLoaderSt
      width={600}
      height={140}
      backgroundColor="#ababab"
      foregroundColor="#fafafa"
    >
      <rect x="120" y="15" rx="5" ry="5" width="80" height="15" />
      <rect x="120" y="69" rx="5" ry="5" width="420" height="9" />
      <rect x="20" y="10" rx="0" ry="0" width="90" height="100" />
    </ContentLoaderSt>
  );
};

const FadingLoaderCard2 = () => {
  return (
    <ContentLoaderSt
      width={500}
      height={140}
      backgroundColor="#bfbfbf"
      foregroundColor="#fafafa"
    >
      <rect x="120" y="15" rx="5" ry="5" width="80" height="15" />
      <rect x="120" y="69" rx="5" ry="5" width="420" height="9" />
      <rect x="20" y="10" rx="0" ry="0" width="90" height="100" />
    </ContentLoaderSt>
  );
};

const FadingLoaderCard3 = () => {
  return (
    <ContentLoaderSt
      width={500}
      height={140}
      backgroundColor="#dadada"
      foregroundColor="#fafafa"
    >
      <rect x="120" y="15" rx="5" ry="5" width="80" height="15" />
      <rect x="120" y="69" rx="5" ry="5" width="420" height="9" />
      <rect x="20" y="10" rx="0" ry="0" width="90" height="100" />
    </ContentLoaderSt>
  );
};

const FadingLoaderCard4 = () => {
  return (
    <ContentLoaderSt
      width={500}
      height={140}
      backgroundColor="#ececec"
      foregroundColor="#fafafa"
    >
      <rect x="120" y="15" rx="5" ry="5" width="80" height="15" />
      <rect x="120" y="69" rx="5" ry="5" width="420" height="9" />
      <rect x="20" y="10" rx="0" ry="0" width="90" height="100" />
    </ContentLoaderSt>
  );
};

const FadingLoaderCard5 = () => {
  return (
    <ContentLoaderSt
      width={500}
      height={140}
      backgroundColor="#f7f7f7"
      foregroundColor="#fafafa"
    >
      <rect x="120" y="15" rx="5" ry="5" width="80" height="15" />
      <rect x="120" y="69" rx="5" ry="5" width="420" height="9" />
      <rect x="20" y="10" rx="0" ry="0" width="90" height="100" />
    </ContentLoaderSt>
  );
};

FadingLoader.metadata = {
  name: 'Nikhil Anand', // My name
  github: 'anandnkhl', // Github username
  description: 'Loader that fades downwards', // Little tagline
  filename: 'FadingLoader', // filename of your loader
};

export default FadingLoader;
