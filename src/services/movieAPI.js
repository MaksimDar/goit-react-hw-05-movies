import axios from 'axios';

const API_KEY = '880e198af65b45260a55d2827420f007';
const BASE_URL = 'https://api.themoviedb.org/3';

const movieApi = axios.create({
  baseURL: BASE_URL,
});

const config = { params: { api_key: API_KEY } };

export const fetchTrendingMovie = async () => {
  const response = await movieApi('/trending/movie/day', config);
  return response;
};

export const getMovieById = async id => {
  const response = await movieApi(`/movie/${id}`, config);
  return response.data;
};

export const getMovieCast = async id => {
  const response = await movieApi(`/movie/${id}/credits`, config);
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await movieApi(`/movie/${id}/reviews`, config);
  return response.data.results;
};

export const searchMovie = async query => {
  const searchConfig = { params: { api_key: API_KEY, query: query } };
  const response = await movieApi('/search/movie', searchConfig);
  return response;
};
