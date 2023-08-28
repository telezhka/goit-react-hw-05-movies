import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=0c604966c8feeccced3f6943d45eff5e`
  );

  return data.results;
};

export const fetchMovie = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=0c604966c8feeccced3f6943d45eff5e`
  );

  return data;
};

export const fetchMovieCredits = async id => {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=0c604966c8feeccced3f6943d45eff5e`
  );

  return data.cast;
};
export const fetchMovieReviews = async id => {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=0c604966c8feeccced3f6943d45eff5e`
  );

  return data.results;
};
export const fetchByQuery = async query => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&page=1&api_key=0c604966c8feeccced3f6943d45eff5e`
  );

  return data.results;
};
