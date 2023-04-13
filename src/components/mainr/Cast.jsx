import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import fetchRequestForActorsApi from '../API/requestForActorsApi';
import PageNotFound from 'components/errorr/PageNotFound';
import SpinnersLoader from 'components/loadingr/SpinnersLoader';
import checkPosters from 'components/utilsr/checkPosters';

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
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [moviesId]);

  return (
    <section>
      <TitleCast> Billed Cast</TitleCast>
      {error && <PageNotFound />}
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
