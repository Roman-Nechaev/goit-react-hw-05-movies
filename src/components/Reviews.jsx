import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRequestForReviewsApi } from './API/requestForReviewsApi';

/*/ 
 обработать ошибки  
 Поставить заглуши если нет информации 
деструктуризация
стили

/*/
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    if (!moviesId) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetchRequestForReviewsApi(moviesId);
        console.log(response);

        setReviews(response.results);
      } catch (error) {}
    };

    fetchData();
  }, [moviesId]);

  return (
    <>
      <h3>Cтраница Reviews ✅</h3>
      {reviews && (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <p>Name: {review.author}</p>
                <p>Character: {review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
