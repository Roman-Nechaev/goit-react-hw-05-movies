import defaultPhoto from '../img/no-photo.png';

const checkPosters = img => {
  if (!img) {
    return defaultPhoto;
  }
  return `https://image.tmdb.org/t/p/w500${img}`;
};

export default checkPosters;
