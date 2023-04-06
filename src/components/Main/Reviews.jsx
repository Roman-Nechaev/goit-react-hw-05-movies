import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRequestForReviewsApi } from '../API/requestForReviewsApi';

/*/ 



стили

/*/
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noInformationCasts, setNoInformationCasts] = useState(false);
  const [error, setError] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    if (!moviesId) {
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchRequestForReviewsApi(moviesId);

        if (results.length === 0) {
          console.log('Нет информации об Reviews');
          setNoInformationCasts(true);
        }
        setReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [moviesId]);

  return (
    <>
      <h3>Cтраница Reviews ✅</h3>
      {error && (
        <>
          <div>Ошибка error</div>
        </>
      )}
      {isLoading && (
        <>
          <div>Загружаем информацию об Reviews isLoading</div>
        </>
      )}

      {noInformationCasts && <div>Нет информации об Reviews</div>}

      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Name: {author}</p>
                <p>Character: {content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
