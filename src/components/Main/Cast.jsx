import { useEffect, useState } from 'react';
import { fetchRequestForActorsApi } from '../API/requestForActorsApi';
import { useParams } from 'react-router-dom';

/*/ 

 Поставить заглуши на изображения есть его нет


стили

/*/

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noInformationCasts, setNoInformationCasts] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    if (!moviesId) {
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchRequestForActorsApi(moviesId);
        console.log(cast);
        if (cast.length === 0) {
          console.log('Нет информации об актерах');
          setNoInformationCasts(true);
        }
        setCasts(cast);
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
      <h3>Cтраница Cast ✅</h3>
      {error && (
        <>
          <div>Ошибка error</div>
        </>
      )}
      {isLoading && (
        <>
          <div>Загружаем информацию об актерах isLoading</div>
        </>
      )}

      {noInformationCasts && <div>Нет информации об актерах</div>}

      {casts && (
        <ul>
          {casts.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id}>
                <p>Name: {name}</p>
                <p>Character: {character}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
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
