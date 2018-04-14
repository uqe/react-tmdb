import queryString from 'query-string';
import { colors } from '../ui/Colors';

export const shortOverview = overview => (overview.length <= 240 ? overview : `${overview.substr(0, overview.lastIndexOf(' ', 240))}...`);

export const fetchGenres = (genres, genreIds) => {
  const genreWords = [];
  genreIds.map(genreId => genres.forEach(item => item.id === genreId && genreWords.push(item.name)));

  return genreWords;
};

export const renderGenres = genres => {
  const done = [];
  genres.map(genre => done.push(genre.name));

  return done.join(', ');
};

export const fetchURL = (props, value) => queryString.parse(props.location.search)[value];

export const getTotalPages = movies => (movies / 20 <= 1 ? 1 : Math.ceil(movies / 20));

export const sliceMoviesToPages = (movies, page) => {
  const end = page * 20;
  const start = end - 20;

  return movies.slice(start, end);
};

export const setRandomGradient = () => colors[Math.floor(Math.random() * colors.length)];
