import { MovieInfo } from 'components/MovieInfo';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { useRef } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { routes } from 'routes';
export const MovieDetails = () => {
  const { movie, isLoading, isError } = useFetchMovie();
  const location = useLocation();
  // console.log('location', location);
  const goBackLinkRef = useRef(location?.state?.from ?? `/movies`);
  // console.log(goBackLinkRef);
  // const goBackLink = location?.state?.from ?? `/movies`;
  return (
    <section>
      <div>
        <Link to={goBackLinkRef.current}>Back to Movies list</Link>
        {isLoading && <p>Is loading</p>}
        {isError && <Navigate to={routes.HOME} replace />}
        {movie && <MovieInfo movie={movie} />}
      </div>
    </section>
  );
};
