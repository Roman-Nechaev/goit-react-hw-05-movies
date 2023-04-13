import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import fetchRequestForReviewsApi from '../API/requestForReviewsApi';

import PageNotFound from 'components/error/PageNotFound';
import SpinnersLoader from 'components/loading/SpinnersLoader';

import {
  ReviewsList,
  Container,
  ReviewsItem,
  Author,
  AuthorItem,
  Character,
  NoReviews,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noInformationCasts, setNoInformationCasts] = useState(false);
  const [error, setError] = useState(false);
  const { moviesId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!moviesId) {
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchRequestForReviewsApi(moviesId);

        if (results.length === 0) {
          setNoInformationCasts(true);
        }
        setReviews(results);
      } catch (error) {
        setError(true);
        navigate('/error', { replace: true });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [moviesId, navigate]);

  return (
    <Container>
      {/* {error && <PageNotFound />} */}
      {isLoading && <SpinnersLoader />}

      {noInformationCasts && <NoReviews>Sorry, no reviews yet!</NoReviews>}

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
