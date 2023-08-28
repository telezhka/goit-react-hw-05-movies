import PropTypes from 'prop-types';

export const ReviewsMarkup = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

ReviewsMarkup.propTypes = {
  reviews: PropTypes.array,
  author: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number,
};
