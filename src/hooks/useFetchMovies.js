import { useState, useEffect } from 'react';
import { getMovies } from 'service/movie-service';

export const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getMovies();
        // console.log('RESPONSE', response);
        setMovies(response);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return {
    movies,
    isLoading,
    isError,
  };
};
