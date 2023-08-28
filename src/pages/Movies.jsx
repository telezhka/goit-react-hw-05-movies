import { useFetchByQuery } from 'hooks/useFetchByQuery';
import React from 'react';
import { SearchForm } from 'components/Form';
import { MovieList } from 'components/MovieList';

export const Movies = () => {
  // return (
  //   <div>
  //     <h2>movies</h2>
  //   </div>
  // );
  const { movie, isLoading, isError, onHandleSubmit } = useFetchByQuery();
  return (
    <section>
      <div>
        <SearchForm onSubmit={onHandleSubmit}>
          {/* <input type="text" />
          <button type="submit"></button> */}
        </SearchForm>
        {isError && <p>Something wrong...</p>}
        {isLoading && <p>Is loading</p>}
        {movie.length > 0 && (
          // <CountryList countries={countries}></CountryList>
          <MovieList movies={movie}></MovieList>
        )}
      </div>
    </section>
  );
};
