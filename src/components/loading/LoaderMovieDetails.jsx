import React from 'react';
import ContentLoader from 'react-content-loader';

const LoaderMovieDetails = props => (
  <ContentLoader
    viewBox="0 0 600 550"
    width={600}
    height={550}
    title="Loading news..."
    {...props}
  >
    <rect x="42.84" y="9.93" rx="5" ry="5" width="300" height="450" />
    <rect x="360" y="40" rx="0" ry="0" width="148.72" height="15" />
    <rect x="360" y="40" rx="0" ry="0" width="89" height="9" />
    <rect x="360" y="70" rx="0" ry="0" width="89" height="10" />
    <rect x="360" y="150" rx="0" ry="0" width="600" height="10" />
  </ContentLoader>
);

LoaderMovieDetails.metadata = {
  name: 'Arthur Falcão',
  github: 'arthurfalcao',
  description: 'News List',
  filename: 'News',
};

export default LoaderMovieDetails;
