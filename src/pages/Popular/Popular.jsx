import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import MovieCards from '../../components/MovieCards';

const Popular = ({ isFetched, isFetchedGenres, movies, pages, page, start, next, back }) =>
  isFetched && isFetchedGenres ? (
    <Fragment>
      <Helmet title={page === 1 ? `Popular Movies` : `Popular Movies | Page ${page}`}>
        <meta name="theme-color" content="#081c24" />
      </Helmet>
      <MovieCards movies={movies} pages={pages} page={page} start={start} next={next} back={back} />
    </Fragment>
  ) : (
    <Helmet title="Loading..." />
  );

export default Popular;
