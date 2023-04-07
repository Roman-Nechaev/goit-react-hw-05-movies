import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Formik } from 'formik';

import { fetchSearchMovies } from 'components/API/searchMoviesApi';
import SearchMoviesItems from '../../components/Main/SearchMoviesItems';
import {
  Button,
  Container,
  ContainerForm,
  FormsSt,
  Input,
} from './Movies.styled';

/*/ 

 Поставить заглуши если нет информации 
 пустой запрос 
стили

/*/

const Movies = () => {
  const [queryResult, setQueryResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const queryMovies = searchParams.get('query') ?? '';

  const handleSubmit = ({ values }, actions) => {
    if (values.trim() === '') {
      console.log('поле ввода не должно быть пустым ');

      return setSearchParams({});
    }

    setSearchParams({ query: values });
    // actions.setSubmitting(false);
  };

  useEffect(() => {
    if (!queryMovies) {
      return;
    }

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const { results } = await fetchSearchMovies(queryMovies);
        console.log(results);
        if (results.length === 0) {
          console.log(`по вашему запросу ${queryMovies} ничего не нашли`);
        }
        setQueryResult(results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [queryMovies]);

  return (
    <div>
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
      {isLoading && (
        <>
          <div>Загружаем список фильмов isLoading</div>
        </>
      )}
      {error && (
        <>
          <div>Ошибка error</div>
        </>
      )}
      {queryResult && !isLoading && (
        <SearchMoviesItems queryResultItems={queryResult} />
      )}
    </div>
  );
};

export default Movies;
