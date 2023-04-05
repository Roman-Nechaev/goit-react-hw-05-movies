import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchMoviesItems = ({ queryResultItems }) => {
  if (!queryResultItems) {
    return;
  }
  console.log(queryResultItems);
  return (
    <div>
      <ul>
        {queryResultItems.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMoviesItems;
//  id title
