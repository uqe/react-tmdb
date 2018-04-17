import queryString from 'query-string';
import { colors } from '../ui/Colors';

export const fetchGenres = (genres, ids) => {
  const result = [];
  ids.map(id => genres.forEach(item => item.id === id && result.push(item.name)));

  return result;
};

export const fetchURL = (props, value) => queryString.parse(props.location.search)[value];

export const getTotalPages = movies => (movies / 20 <= 1 ? 1 : Math.ceil(movies / 20));

export const sliceMoviesToPages = (movies, page) => {
  const end = page * 20;
  const start = end - 20;

  return movies.slice(start, end);
};

export const setRandomGradient = () => colors[Math.floor(Math.random() * colors.length)];
