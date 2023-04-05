import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';

import { fetchSearchMovies } from 'components/API/searchMoviesApi';
import SearchMoviesItems from './SearchMoviesItems';

const Movies = () => {
  const [state, setState] = useState('');
  const [queryResult, setQueryResult] = useState(null);

  const handleSubmit = ({ text }, actions) => {
    if (text.trim() === '') {
      console.log('поле ввода не должно быть пустым ');
    }
    console.log(text);
    setState(text);
    actions.setSubmitting(false);
  };

  useEffect(() => {
    if (!state) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetchSearchMovies(state);

        setQueryResult(response.results);
      } catch (error) {}
    };
    fetchData();
  }, [state]);
  console.log(queryResult);
  return (
    <div>
      <Formik initialValues={{ text: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Field
              name="text"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
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
