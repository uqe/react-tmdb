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
