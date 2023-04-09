import { useEffect, useState } from 'react';
import { fetchRequestForActorsApi } from '../API/requestForActorsApi';
import { useParams } from 'react-router-dom';
import {
  CastScrolled,
  Character,
  Img,
  LiCard,
  Name,
  Ol,
  TitleCast,
} from './Cast.styled';

import defaultPhoto from '../Img/no-photo.png';

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

  const checkImg = img => {
    if (!img) {
      return defaultPhoto;
    }
    return `https://image.tmdb.org/t/p/w500${img}`;
  };

  return (
    <section>
      <TitleCast> Billed Cast</TitleCast>
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
        <CastScrolled>
          <Ol>
            {casts.map(({ id, name, character, profile_path }) => {
              return (
                <LiCard key={id}>
                  <Img loading="lazy" src={checkImg(profile_path)} alt={name} />
                  <Name>{name}</Name>
                  <Character>{character}</Character>
                </LiCard>
              );
            })}
          </Ol>
        </CastScrolled>
      )}
    </section>
  );
};

export default Cast;
