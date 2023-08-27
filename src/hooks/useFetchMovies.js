import { useState, useEffect } from 'react';
import { getMovies } from 'service/movie-service';

export const useFetchMovies = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getMovies();
        // setCountries(response);
        console.log(response);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return {
    countries,
    isLoading,
    isError,
  };
};
