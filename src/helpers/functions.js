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

export const fetchRuntime = mins => {
  if (mins === null) return '';
  if (mins < 60) return `${mins} min`;

  if (mins % 60 === 0) return `${mins / 60}h`;

  const hours = (mins / 60) | 0;
  const minutes = mins % 60;

  return `${hours}h ${minutes}min`;
};

export const fetchCertifications = dates => {
  // if (dates.results.filter(country => country.iso_3166_1 === 'US').length === 0) {
  //   return `-`;
  // }

  const { certification } = dates.results
    .filter(country => country.iso_3166_1 === 'US')[0]
    .release_dates.filter(release => release.type >= 3)[0];

  switch (certification) {
    case 'PG':
      return `0+`;
      break;
    case 'PG-13':
      return `13+`;
      break;
    case 'R':
      return `17+`;
      break;
    case 'NC-17':
      return `18+`;
    case '':
      return '—';
      break;
    default:
      return certification;
  }
};

export const formatMoney = money => {
  const settings = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return settings.format(money);
};
