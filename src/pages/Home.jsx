import React from 'react';
import { useFetchMovies } from 'hooks/useFetchMovies';
import { MovieList } from 'components/MovieList';

export const Home = () => {
  const { movies, isLoading, isError } = useFetchMovies();
  return (
    <section>
      {/* <h1>Home</h1> */}
      {isError && <p textAlign="center">Something wrong...</p>}
      {isLoading && <p>Is loading</p>}
      {movies.length > 0 && <MovieList movies={movies}></MovieList>}
    </section>
  );
};
