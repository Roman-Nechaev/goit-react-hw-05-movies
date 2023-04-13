import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import fetchRequestForActorsApi from '../API/requestForActorsApi';

import SpinnersLoader from 'components/loading/SpinnersLoader';
import checkPosters from 'components/utils/checkPosters';

import {
  CastScrolled,
  Character,
  Img,
  LiCard,
  Name,
  NoCast,
  Ol,
  TitleCast,
} from './Cast.styled';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noInformationCasts, setNoInformationCasts] = useState(false);
  const { moviesId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!moviesId) {
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchRequestForActorsApi(moviesId);

        if (cast.length === 0) {
          setNoInformationCasts(true);
        }
        setCasts(cast);
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
    <section>
      <TitleCast> Billed Cast</TitleCast>

      {isLoading && <SpinnersLoader />}

      {noInformationCasts && <NoCast>Sorry, no cast information yet!</NoCast>}

      {casts && (
        <CastScrolled>
          <Ol>
            {casts.map(({ id, name, character, profile_path }) => {
              return (
                <LiCard key={id}>
                  <Img
                    loading="lazy"
                    src={checkPosters(profile_path)}
                    alt={name}
                  />
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
