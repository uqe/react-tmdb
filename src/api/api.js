import axios from 'axios';

const TOKEN = process.env.THEMOVIEDB_API_KEY;
const LANG = `language=${process.env.THEMOVIEDB_API_LANGUAGE}`;
const ADULT = `include_adult=${process.env.THEMOVIEDB_API_ADULT}`;
const URL = 'https://api.themoviedb.org/3';

const getPopularMovies = async page =>
  await axios.get(`${URL}/movie/popular?api_key=${TOKEN}&${LANG}&page=${page === undefined ? 1 : page}`);

const getGenres = async () => await axios.get(`${URL}/genre/movie/list?api_key=${TOKEN}&${LANG}`);

const getMovieDetails = async id => await axios.get(`${URL}/movie/${id}?api_key=${TOKEN}&${LANG}`);

const getMovieRecommendations = async (id, page) =>
  await axios.get(`${URL}/movie/${id}/recommendations?api_key=${TOKEN}&${LANG}&page=${page}`);

const getMovieSearchResults = async (query, page) =>
  await axios.get(`${URL}/search/movie?api_key=${TOKEN}&${LANG}&query=${query}&page=${page === undefined ? 1 : page}&${ADULT}`);

export const api = {
  getPopularMovies,
  getGenres,
  getMovieDetails,
  getMovieRecommendations,
  getMovieSearchResults
};
