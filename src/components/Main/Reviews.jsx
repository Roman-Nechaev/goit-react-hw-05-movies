import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRequestForReviewsApi } from '../API/requestForReviewsApi';
import {
  ReviewsList,
  Container,
  ReviewsItem,
  Author,
  AuthorItem,
  Character,
} from './Reviews.styled';

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
    <Container>
      {/* <h3>Cтраница Reviews ✅</h3> */}
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
        <ReviewsList>
          {reviews.map(({ id, author, content }) => {
            return (
              <ReviewsItem key={id}>
                <Author>
                  Author: <AuthorItem>{author}</AuthorItem>
                </Author>
                <Character>{content}</Character>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      )}
    </Container>
  );
};

export default Reviews;
