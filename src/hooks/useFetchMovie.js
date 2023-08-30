import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie } from 'service/movie-service';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetchMovie(movieId);
        setMovie(response);
        // console.log(id);
        // console.log('response', response);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  return {
    movie,
    isLoading,
    isError,
  };
};
