import React, { Component, Fragment } from 'react';
import { Box } from 'grid-styled';
import Pagination from './Pagination';
import MovieCard from './MovieCard';

class MovieCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { movies, pages, page, start, next, back } = this.props;

    return (
      <Fragment>
        {movies.map(movie => (
          <Box width={[1, 0.7, 0.55, 0.48]} key={movie.original_title} my={2} mx={2}>
            <MovieCard
              movie={movie}
              poster_path={movie.poster_path}
              title={movie.title}
              all_genres={movie.all_genres}
              overview={movie.overview}
              id={movie.id}
              adult={movie.adult}
            />
          </Box>
        ))}
        <Pagination pages={pages} page={page} start={start} next={next} back={back} />
      </Fragment>
    );
  }
}

export default MovieCards;
