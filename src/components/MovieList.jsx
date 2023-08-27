// import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  // console.log(location);
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
