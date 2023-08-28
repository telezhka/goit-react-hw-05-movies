import { ReviewsMarkup } from 'components/ReviewsMarkup';
import { useFetchMovieReviews } from 'hooks/useFetchMovieReviews';

export const Reviews = () => {
  const { reviews, isLoading, isError } = useFetchMovieReviews();
  return (
    <section>
      <div>
        {isLoading && <p>Is loading</p>}
        {isError && <p>Something wrong...</p>}
        {reviews > 0 ? (
          <ReviewsMarkup reviews={reviews} />
        ) : (
          <p>There is nothing inside</p>
        )}
      </div>
    </section>
  );
};
