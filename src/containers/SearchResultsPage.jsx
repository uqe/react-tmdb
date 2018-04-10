import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actions } from '../actions';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import AppBar from '../components/AppBar';
import { Container } from '../ui/PopularMoviesPage';
import { Box } from 'grid-styled';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

class SearchResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
      movie: ''
    };

    this.getCurrentPage = this.getCurrentPage.bind(this);
  }

  componentDidMount = () => {
    this.getCurrentPage(this.props, false);
    this.props.genres === undefined && this.props.getGenres();
  };

  componentWillReceiveProps = nextProps => {
    this.getCurrentPage(this.props, true, nextProps);
  };

  getCurrentPage = (props, update, nextProps) => {
    const updater = update
      ? queryString.parse(props.location.search).page !== queryString.parse(nextProps.location.search).page ||
        queryString.parse(props.location.search).movie !== queryString.parse(nextProps.location.search).movie
      : true;
    const uniProps = nextProps === undefined ? props : nextProps;

    updater &&
      this.setState(
        {
          page:
            queryString.parse(uniProps.location.search).page === undefined
              ? 1
              : parseInt(queryString.parse(uniProps.location.search).page, 10),
          movie: queryString.parse(uniProps.location.search).movie
        },
        () => {
          this.props.getMovieSearchResults(this.state.movie, this.state.page);
          document.title =
            this.state.page === 1 ? `Result for "${this.state.movie}"` : `Result for "${this.state.movie}" | Page ${this.state.page}`;
        }
      );
  };

  render() {
    const { search, genres, isFetching, isFetched, isFetchedGenres } = this.props;
    const { page, movie } = this.state;

    return isFetched && isFetchedGenres ? (
      <Fragment>
        <AppBar />
        <Container>
          <MovieCard genres={genres} movies={search} />
          <Pagination
            page={page}
            start={{ pathname: '/search', search: `movie=${movie}` }}
            next={{ pathname: '/search', search: `page=${page + 1}&movie=${movie}` }}
            back={{ pathname: '/search', search: `page=${page - 1}&movie=${movie}` }}
          />
        </Container>
      </Fragment>
    ) : (
      <AppBar isFetched={!isFetched} isFetchedGenres={!isFetchedGenres} />
    );
  }
}

const mapStateToProps = state => ({
  search: state.search.results,
  isFetching: state.search.isFetching,
  isFetched: state.search.isFetched,
  genres: state.genres.genres,
  isFetchedGenres: state.genres.isFetched
});

const mapDispatchToProps = dispatch => ({
  getMovieSearchResults: (query, page) => dispatch(actions.getMovieSearchResults(query, page)),
  getGenres: () => dispatch(actions.getGenres())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
