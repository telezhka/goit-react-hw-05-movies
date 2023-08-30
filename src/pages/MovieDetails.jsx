import { MovieInfo } from 'components/MovieInfo';
import { useFetchByQuery } from 'hooks/useFetchByQuery';
import { useFetchMovie } from 'hooks/useFetchMovie';
// import { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { routes } from 'routes';
export const MovieDetails = () => {
  const { queryF } = useFetchByQuery();
  const { movie, isLoading, isError } = useFetchMovie();
  console.log('queryF-MD', queryF);
  const location = useLocation();
  console.log('location', location);

  const goBackLink = location?.state?.from ?? `/movies?query=${queryF}`;
  return (
    <section>
      <div>
        <Link to={goBackLink}>Back to Movies list</Link>
        {isLoading && <p>Is loading</p>}
        {isError && <Navigate to={routes.HOME} replace />}
        {movie && <MovieInfo movie={movie} />}
      </div>
    </section>
  );
};
