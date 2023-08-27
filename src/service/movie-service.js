import axios from 'axios';
// import { transformCountriesData, transformCountryData } from 'helpers';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=0c604966c8feeccced3f6943d45eff5e`
  );
  //   const countries = transformCountriesData(data);

  return data.results;
};

export const fetchCountry = async name => {
  const { data } = await axios.get(`/name/${name}`);
  //   const country = transformCountryData(data);

  //   return country[0];
};

export const fetchByRegion = async region => {
  const { data } = await axios.get(`/region/${region}`);
  //   const countries = transformCountriesData(data);

  //   return countries;
};
