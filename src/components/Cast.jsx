import { useEffect, useState } from 'react';
import { fetchRequestForActorsApi } from './API/requestForActorsApi';
import { useParams } from 'react-router-dom';

/*/ 
 обработать ошибки  
 Поставить заглуши на изображения есть его нет
 Поставить заглуши если нет информации 
 деструктуризация
стили

/*/

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    if (!moviesId) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetchRequestForActorsApi(moviesId);

        setCasts(response.cast);
      } catch (error) {}
    };

    fetchData();
  }, [moviesId]);

  console.log(casts);
  return (
    <>
      <h3>Cтраница Cast ✅</h3>
      {casts && (
        <ul>
          {casts.map(cast => {
            return (
              <li key={cast.id}>
                <p>Name: {cast.name}</p>
                <p>Character: {cast.character}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.name}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
