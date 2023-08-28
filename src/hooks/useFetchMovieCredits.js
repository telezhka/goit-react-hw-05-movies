import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'service/movie-service';
// import { fetchMovie } from 'service/country-service';

export const useFetchMovieCredits = () => {
  const [credits, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetchMovieCredits(movieId);
        setMovie(response);
        // console.log(id);
        console.log('credits', response);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  return {
    credits,
    isLoading,
    isError,
  };
};
