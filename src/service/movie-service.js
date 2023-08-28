import axios from 'axios';
// import { transformCountriesData, transformCountryData } from 'helpers';
// https://api.themoviedb.org/3/movie/869641/wmH3VaUbwwTO3vDJhWT35BOFgb3.jpg?api_key=0c604966c8feeccced3f6943d45eff5e
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=0c604966c8feeccced3f6943d45eff5e`
  );
  //   const countries = transformCountriesData(data);

  return data.results;
};

export const fetchMovie = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=0c604966c8feeccced3f6943d45eff5e`
  );
  //   const country = transformCountryData(data);

  return data;
};

export const fetchByQuery = async query => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&page=1&api_key=0c604966c8feeccced3f6943d45eff5e`
  );
  //   const countries = transformCountriesData(data);
  return data.results;
};
