import React from 'react';
import { useFetchMovies } from 'hooks/useFetchMovies';

export const Home = () => {
  const { countries, isLoading, isError } = useFetchMovies();
  return (
    <section>
      <h1>Home</h1>
    </section>
  );
};
