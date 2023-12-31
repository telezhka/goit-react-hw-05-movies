import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  // console.log('MovList', location);
  return (
    <ul>
      {movies.map(({ original_title, id }) => (
        <li key={id}>
          <Link to={`${routes.MOVIES}/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
MovieList.propTypes = {
  movies: PropTypes.array,
  original_title: PropTypes.string,
  id: PropTypes.number,
};
