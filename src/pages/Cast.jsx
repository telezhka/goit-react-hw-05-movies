// import { MovieInfo } from 'components/MovieInfo';
import { Credits } from 'components/Credits';
import { useFetchMovieCredits } from 'hooks/useFetchMovieCredits';
// import { Link, Navigate, useLocation } from 'react-router-dom';
// import { routes } from 'routes';

export const Cast = () => {
  const { credits, isLoading, isError } = useFetchMovieCredits();
  return (
    <section>
      <div>
        {isLoading && <p>Is loading</p>}
        {isError && <p>Something wrong...</p>}
        {
          credits && <Credits credits={credits} />
          //   <MovieInfo movie={movie}/>
        }
      </div>
    </section>
  );
};
