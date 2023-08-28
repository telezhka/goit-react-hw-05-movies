import { useFetchByQuery } from 'hooks/useFetchByQuery';
import React from 'react';
import { SearchForm } from 'components/Form';
import { MovieList } from 'components/MovieList';

export const Movies = () => {
  const { movie, isLoading, isError, onHandleSubmit } = useFetchByQuery();
  return (
    <section>
      <div>
        <SearchForm onSubmit={onHandleSubmit}>
        </SearchForm>
        {isError && <p>Something wrong...</p>}
        {isLoading && <p>Is loading</p>}
        {movie.length > 0 && (
          <MovieList movies={movie}></MovieList>
        )}
      </div>
    </section>
  );
};
