import React, { Fragment } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';
import MovieCard from './MovieCard';

const Wrapper = styled.div`
  display: grid;
  gap: 16px 16px;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    gap: 8px 8px;
    grid-template-columns: 1fr;
  }
`;

const MovieCards = ({ movies, pages, page, start, next, back }) => (
  <Fragment>
    <Wrapper>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          poster_path={movie.poster_path}
          title={movie.title}
          all_genres={movie.all_genres}
          overview={movie.overview}
          id={movie.id}
          adult={movie.adult}
        />
      ))}
    </Wrapper>
    <Pagination pages={pages} page={page} start={start} next={next} back={back} />
  </Fragment>
);

export default MovieCards;
