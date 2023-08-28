import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'service/movie-service';
export const useFetchMovieReviews = () => {
  const [reviews, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setMovie(response);
        // console.log(id);
        console.log('reviews', response);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  return {
    reviews,
    isLoading,
    isError,
  };
};
