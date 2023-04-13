import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import fetchSearchMovies from 'components/API/searchMoviesApi';

import SearchMoviesItems from '../../components/main/SearchMoviesItems';
import FadingLoader from 'components/loading/FadingLoaderCard';

import badRequestFromUser from 'components/error/badRequestFromUser';
import errorEmptyInput from 'components/error/errorEmptyInput';

import { Button, ContainerForm, FormsSt, Input } from './Movies.styled';

const Movies = () => {
  const [queryResult, setQueryResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const queryMovies = searchParams.get('query') ?? '';

  const handleSubmit = ({ values }, actions) => {
    if (values.trim() === '') {
      errorEmptyInput();
      return;
    }

    setSearchParams({ query: values });
    actions.setSubmitting(false);
  };

  useEffect(() => {
    if (!queryMovies) {
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const { results } = await fetchSearchMovies(queryMovies);

        if (results.length === 0) {
          setError(badRequestFromUser(queryMovies));

          return;
        }
        setQueryResult(results);
      } catch {
        setError(true);
        navigate('/error', { replace: true });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [navigate, queryMovies, setSearchParams]);

  return (
    <>
      <ContainerForm>
        <Formik initialValues={{ values: queryMovies }} onSubmit={handleSubmit}>
          <FormsSt>
            <Button type="submit"></Button>
            <Input
              name="values"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Find a movie"
            />
          </FormsSt>
        </Formik>
      </ContainerForm>
      {isLoading && <FadingLoader />}

      {!error && !isLoading && queryResult && (
        <SearchMoviesItems queryResultItems={queryResult} />
      )}
    </>
  );
};

export default Movies;
