import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from 'service/movie-service';

export const useFetchByQuery = () => {
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const movieQuery = searchParams.get('query');
    if (!movieQuery) {
      return;
    }
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetchByQuery(movieQuery);
        console.log(response);
        setMovie(response); // Update the movie state with the fetched data
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  const onHandleSubmit = value => {
    setSearchParams({ query: value }); // Update the query parameter in the URL
  };

  return {
    movie,
    isLoading,
    isError,
    onHandleSubmit,
  };
};