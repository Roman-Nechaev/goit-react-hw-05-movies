import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Formik, Form, Field } from 'formik';

import { fetchSearchMovies } from 'components/API/searchMoviesApi';
import SearchMoviesItems from './SearchMoviesItems';

/*/ 
 обработать ошибки  
 Поставить заглуши если нет информации 
 пустой запрос 
стили

/*/

const Movies = () => {
  const [queryResult, setQueryResult] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const queryMovies = searchParams.get('query') ?? '';

  const handleSubmit = ({ values }, actions) => {
    if (values.trim() === '') {
      console.log('поле ввода не должно быть пустым ');
      return setSearchParams({});
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
        const response = await fetchSearchMovies(queryMovies);

        setQueryResult(response.results);
      } catch (error) {}
    };

    fetchData();
  }, [queryMovies]);

  return (
    <div>
      <Formik initialValues={{ values: queryMovies }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field
              name="values"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search"
            />
            <button type="submit" disabled={isSubmitting}>
              <span>Search</span>
            </button>
          </Form>
        )}
      </Formik>
      {queryResult && <SearchMoviesItems queryResultItems={queryResult} />}
    </div>
  );
};

export default Movies;
