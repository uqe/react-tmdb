import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { actions } from '../actions';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import AppBar from '../components/AppBar';
import { Container } from '../ui/PopularMoviesPage';

class PopularMoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null
    };

    this.getCurrentPage = this.getCurrentPage.bind(this);
  }

  componentDidMount = () => {
    this.getCurrentPage(this.props);
    this.props.genres === undefined && this.props.getGenres();
  };

  componentWillReceiveProps = nextProps => {
    // console.log(this.props);
    // console.log(nextProps);
    this.props.match.params.page !== nextProps.match.params.page && this.getCurrentPage(nextProps);
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.favorites === nextProps.favorites;
  }

  getCurrentPage = props => {
    this.setState({ page: props.match.params.page === undefined ? 1 : parseInt(props.match.params.page, 10) }, () => {
      this.props.getPopularMovies(this.state.page);
    });
  };

  render() {
    const {
      genres,
      favorites,
      movies: { results: movies },
      movies: { total_results: pages },
      isFetched,
      isFetchedGenres,
      addMovieToFavorites,
      removeMovieFromFavorites
    } = this.props;
    const { page } = this.state;

    return isFetched && isFetchedGenres ? (
      <Fragment>
        <Helmet title={page === 1 ? `Popular Movies` : `Popular Movies | Page ${page}`} />
        <AppBar />
        <Container>
          <MovieCard
            genres={genres}
            movies={movies}
            favorites={favorites}
            addToFavorites={addMovieToFavorites}
            removeFromFavorites={removeMovieFromFavorites}
          />
          <Pagination pages={pages} page={page} start="/" next={`/${page + 1}`} back={`/${page - 1}`} />
        </Container>
      </Fragment>
    ) : (
      <Fragment>
        <Helmet title="Loading..." />
        <AppBar isFetched={!isFetched} isFetchedGenres={!isFetchedGenres} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  isFetching: state.movies.isFetching,
  isFetched: state.movies.isFetched,
  genres: state.genres.genres,
  isFetchedGenres: state.genres.isFetched,
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  getPopularMovies: page => dispatch(actions.getPopularMovies(page)),
  getGenres: () => dispatch(actions.getGenres()),
  addMovieToFavorites: id => dispatch(actions.addMovieToFavorites(id)),
  removeMovieFromFavorites: id => dispatch(actions.removeMovieFromFavorites(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularMoviesPage);
