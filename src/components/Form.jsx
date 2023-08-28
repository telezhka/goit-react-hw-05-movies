// import { FiSearch } from 'react-icons/fi';
// import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

// const regions = [
//   { id: 'africa', value: 'africa', name: 'Africa' },
//   { id: 'america', value: 'america', name: 'America' },
//   { id: 'asia', value: 'asia', name: 'Asia' },
//   { id: 'europe', value: 'europe', name: 'Europe' },
//   { id: 'oceania', value: 'oceania', name: 'Oceania' },
// ];

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
      <button type="submit">
        {/* <FiSearch size="16px" /> */}
        submit
      </button>
      {/* <Select
        aria-label="select"
        name="region"
        required
        onChange={handleChange}
        value={value}
      >
        <option disabled value="">
          Select a region and press enter
        </option>
        {regions &&
          regions.map(({ id, name, value }) => (
            <option key={id} value={value} style={{ color: 'red' }}>
              {name}
            </option>
          ))}
      </Select> */}
      <input type="text" onChange={handleChange} />
    </form>
  );
};
