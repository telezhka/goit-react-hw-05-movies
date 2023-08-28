import PropTypes from 'prop-types';
import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };
  const handleChange = e => {
    setValue(e.target.value.toLowerCase().trim());
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">submit</button>
      <input type="text" onChange={handleChange} />
    </form>
  );
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
