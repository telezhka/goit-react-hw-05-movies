import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

export const MovieInfo = ({
  movie: { id, title, poster_path, vote_average, overview, genres = [] },
}) => {
  //   console.log(genres);
  const onlyGenres = genres.map(genre => genre.name);
  //   console.log('only', onlyGenres);
  return (
    <section>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <h1>{title}</h1>
      <p>User score: {vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{onlyGenres.join(', ')}</p>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={`/movies/${id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
};
MovieInfo.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object),
  }),
};
