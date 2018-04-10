import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
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
    this.props.match.params.page !== nextProps.match.params.page && this.getCurrentPage(nextProps);
  };

  getCurrentPage = props => {
    this.setState({ page: props.match.params.page === undefined ? 1 : parseInt(props.match.params.page, 10) }, () => {
      this.props.getPopularMovies(this.state.page);
      this.state.page === 1 ? (document.title = 'Popular Movies') : (document.title = `Popular Movies | Page ${this.state.page}`);
    });
  };

  render() {
    const { genres, movies, isFetching, isFetched, isFetchedGenres } = this.props;
    const { page } = this.state;

    return isFetched && isFetchedGenres ? (
      <Fragment>
        <AppBar />
        <Container>
          <MovieCard genres={genres} movies={movies} />
          <Pagination page={page} start={`/`} next={`/${page + 1}`} back={`/${page - 1}`} />
        </Container>
      </Fragment>
    ) : (
      <AppBar isFetched={!isFetched} isFetchedGenres={!isFetchedGenres} />
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.results,
  isFetching: state.movies.isFetching,
  isFetched: state.movies.isFetched,
  genres: state.genres.genres,
  isFetchedGenres: state.genres.isFetched
});

const mapDispatchToProps = dispatch => ({
  getPopularMovies: page => dispatch(actions.getPopularMovies(page)),
  getGenres: () => dispatch(actions.getGenres())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularMoviesPage);
