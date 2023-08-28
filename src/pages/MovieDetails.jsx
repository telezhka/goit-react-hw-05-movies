// export const MovieDetails = () => {};
// import { Section, Container, CountryInfo, Loader, GoBackBtn } from 'components';
import { MovieInfo } from 'components/MovieInfo';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { routes } from 'routes';
export const MovieDetails = () => {
  const { movie, isLoading, isError } = useFetchMovie();

  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';
  //   console.log('location', location);
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
