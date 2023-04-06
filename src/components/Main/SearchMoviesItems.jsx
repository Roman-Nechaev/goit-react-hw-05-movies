import { Link, useLocation } from 'react-router-dom';

const SearchMoviesItems = ({ queryResultItems }) => {
  const location = useLocation();
  if (!queryResultItems) {
    return;
  }

  return (
    <div>
      <ul>
        {queryResultItems.map(item => (
          <li key={item.id}>
            <Link to={`${item.id}`} state={{ from: location }}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMoviesItems;
