import { useFetchByQuery } from 'hooks/useFetchByQuery';
import React from 'react';
import { SearchForm } from 'components/Form';
import { MovieList } from 'components/MovieList';
// import { useLocation } from 'react-router-dom';

export const Movies = () => {
  const { movie, isLoading, isError, onHandleSubmit } = useFetchByQuery();
  // const location = useLocation();
  // console.log(location);
  return (
    <section>
      <div>
        <SearchForm onSubmit={onHandleSubmit}></SearchForm>
        {isError && <p>Something wrong...</p>}
        {isLoading && <p>Is loading</p>}
        {movie.length > 0 && <MovieList movies={movie}></MovieList>}
      </div>
    </section>
  );
};
