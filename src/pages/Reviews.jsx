import { ReviewsMarkup } from 'components/ReviewsMarkup';
import { useFetchMovieReviews } from 'hooks/useFetchMovieReviews';

export const Reviews = () => {
  const { reviews, isLoading, isError } = useFetchMovieReviews();
  return (
    <section>
      <div>
        {isLoading && <p>Is loading</p>}
        {isError && <p>Something wrong...</p>}
        {reviews && reviews.length > 0 ? (
          <ReviewsMarkup reviews={reviews} />
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </section>
  );
};
