import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';

import fetchSearchMovies from 'components/API/searchMoviesApi';
import SearchMoviesItems from '../../components/Main/SearchMoviesItems';
import FadingLoader from 'components/Loading/FadingLoaderCard';
import errorEmptyInput from 'components/Error/errorEmptyInput';
import badRequestFromUser from 'components/Error/badRequestFromUser';
import PageNotFound from 'components/Error/PageNotFound';

import { Button, ContainerForm, FormsSt, Input } from './Movies.styled';

const Movies = () => {
  const [queryResult, setQueryResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

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
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [queryMovies, setSearchParams]);

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
      {error && <PageNotFound />}
      {!error && !isLoading && queryResult && (
        <SearchMoviesItems queryResultItems={queryResult} />
      )}
    </>
  );
};

export default Movies;
