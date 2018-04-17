import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { actions } from '../actions';
import MovieCards from '../components/MovieCards';
import AppBar from '../components/AppBar';
import { Container } from '../ui/PopularMoviesPage';
import { getTotalPages, sliceMoviesToPages } from '../helpers';

class FavoritesMoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
      pages: null,
      movies: [],
      doneslicing: false
    };

    this.getCurrentPage = this.getCurrentPage.bind(this);
  }

  componentDidMount = () => {
    this.getCurrentPage(this.props);
    this.props.genres === undefined && this.props.getGenres();
  };

  componentWillReceiveProps = nextProps => {
    (this.props.match.params.page !== nextProps.match.params.page || this.props.favorites.length !== nextProps.favorites.length) &&
      this.getCurrentPage(nextProps);
    this.props.match.params.page !== nextProps.match.params.page && window.scrollTo(0, 0);
    this.props.favorites.length === nextProps.favorites.length && window.scrollTo(0, 0);
  };

  getCurrentPage = props => {
    this.setState(
      {
        page: props.match.params.page === undefined ? 1 : parseInt(props.match.params.page, 10),
        pages: getTotalPages(props.favorites.length)
      },
      () => {
        this.setState({ movies: sliceMoviesToPages(props.favorites, this.state.page), doneslicing: true });
      }
    );
  };

  render() {
    const { isFetchedGenres } = this.props;
    const { page, pages, movies, doneslicing } = this.state;

    return isFetchedGenres && doneslicing ? (
      <Fragment>
        <Helmet title={page === 1 ? `Favorites Movies` : `Favorites Movies | Page ${page}`} />
        <Container>
          <AppBar />
          {movies.length !== 0 ? (
            <MovieCards
              movies={movies}
              pages={pages}
              page={page}
              start="/favorites/page/1"
              next={`/favorites/page/${page + 1}`}
              back={`/favorites/page/${page - 1}`}
            />
          ) : (
            <Fragment>
              <h1>No favorite movies</h1>
              {page !== 1 && <Redirect to={`/favorites/page/${pages}`} />}
            </Fragment>
          )}
        </Container>
      </Fragment>
    ) : (
      <Fragment>
        <Container>
          <Helmet title="Loading..." />
          <AppBar isFetched={!(movies.length !== 0)} isFetchedGenres={!isFetchedGenres} />
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie,
  isFetching: state.movie.isFetching,
  genres: state.genres.genres,
  isFetchedGenres: state.genres.isFetched,
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  getMovieDetails: id => dispatch(actions.getMovieDetails(id)),
  getGenres: () => dispatch(actions.getGenres())
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesMoviesPage);
