const TOKEN = process.env.THEMOVIEDB_API_KEY;
const LANG = `language=${process.env.THEMOVIEDB_API_LANGUAGE}`;
const URL = 'https://api.themoviedb.org/3';

const getPopularMovies = page => {
  const pageToFetch = page === undefined ? 1 : page;

  return fetch(`${URL}/movie/popular?api_key=${TOKEN}&${LANG}&page=${pageToFetch}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json();
  });
};

const getGenres = () =>
  fetch(`${URL}/genre/movie/list?api_key=${TOKEN}&${LANG}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json();
  });

const getMovieDetails = id =>
  fetch(`${URL}/movie/${id}?api_key=${TOKEN}&${LANG}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json();
  });

const getMovieRecommendations = (id, page) =>
  fetch(`${URL}/movie/${id}/recommendations?api_key=${TOKEN}&${LANG}&page=${page}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json();
  });

export const api = {
  getPopularMovies,
  getGenres,
  getMovieDetails,
  getMovieRecommendations
};
