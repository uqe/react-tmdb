import React from 'react';
import LazyLoad from 'react-lazyload';

import { Card, Description, Genres, Information, Poster, Title } from '../ui/MovieCard';
import FavoriteButton from './FavoriteButton';

const MovieCard = ({ all_genres, movie, poster_path, title, overview, id }) => (
  <LazyLoad offset={500} height={300}>
    <Card to={`/movie/${id}`}>
      <Information>
        <Title>{title}</Title>
        <Genres>{all_genres.join(' • ')}</Genres>
        <Description>{overview}</Description>
      </Information>
      <Poster src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
      <FavoriteButton movie={movie} id={id} />
    </Card>
  </LazyLoad>
);

export default MovieCard;
