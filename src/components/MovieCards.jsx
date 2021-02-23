import React, { Fragment, lazy } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';

const MovieCard = lazy(() => import('./MovieCard'));

const Wrapper = styled.div`
  --min: calc(320px - 1.5rem);
  --gap: 1rem;

  height: 100%;
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: repeat(auto-fit, minmax(var(--min), 1fr));

  /* @media (max-width: 768px) {
    grid-gap: 0.5rem;
  } */
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
