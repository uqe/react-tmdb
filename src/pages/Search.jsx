import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { actions } from '../actions';
import MovieCards from '../components/MovieCards';
import { fetchURL } from '../helpers';
import { Sorry } from '../ui/Sorry';

class Search extends Component {
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
      ? fetchURL(props, 'page') !== fetchURL(nextProps, 'page') || fetchURL(props, 'movie') !== fetchURL(nextProps, 'movie')
      : true;
    const uniProps = nextProps === undefined ? props : nextProps;

    updater &&
      this.setState(
        {
          page: fetchURL(uniProps, 'page') === undefined ? 1 : parseInt(fetchURL(uniProps, 'page'), 10),
          movie: fetchURL(uniProps, 'movie')
        },
        () => {
          this.props.getMovieSearchResults(this.state.movie, this.state.page);
        }
      );
  };

  render() {
    const {
      search: { total_pages: pages },
      search: { results: movies },
      isFetched,
      isFetchedGenres
    } = this.props;
    const { page, movie } = this.state;

    return isFetched && isFetchedGenres ? (
      <Fragment>
        <Helmet title={page === 1 ? `${movie} — results` : `${movie} — results | Page ${page}`}>
          <meta name="theme-color" content="#081c24" />
        </Helmet>
        {movies.length === 0 ? (
          <Sorry>No movies :(</Sorry>
        ) : (
          <MovieCards
            movies={movies}
            pages={pages}
            page={page}
            start={{ pathname: '/search', search: `movie=${movie}` }}
            next={{ pathname: '/search', search: `page=${page + 1}&movie=${movie}` }}
            back={{ pathname: '/search', search: `page=${page - 1}&movie=${movie}` }}
          />
        )}
      </Fragment>
    ) : (
      <Helmet title="Loading..." />
    );
  }
}

const mapStateToProps = state => ({
  search: state.search,
  isFetching: state.search.isFetching,
  isFetched: state.search.isFetched,
  isFetchedGenres: state.genres.isFetched
});

const mapDispatchToProps = dispatch => ({
  getMovieSearchResults: (query, page) => dispatch(actions.getMovieSearchResults(query, page)),
  getGenres: () => dispatch(actions.getGenres())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
