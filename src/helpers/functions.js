import queryString from 'query-string';

export const shortOverview = overview => (overview.length <= 120 ? overview : `${overview.substr(0, overview.lastIndexOf(' ', 120))}...`);

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
