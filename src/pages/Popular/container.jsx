import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../actions';
import Popular from './Popular';

class PopularContainer extends Component {
  state = {
    page: null
  };

  componentDidMount = () => {
    this.props.getGenres();
    this.getCurrentPage(this.props);
  };

  componentWillReceiveProps = nextProps => {
    this.props.match.params.page !== nextProps.match.params.page && this.getCurrentPage(nextProps);
  };

  getCurrentPage = props => {
    this.setState({ page: props.match.params.page === undefined ? 1 : parseInt(props.match.params.page, 10) }, () => {
      this.props.getPopularMovies(this.state.page);
    });
  };

  render() {
    const {
      movies: { results: movies },
      movies: { total_results: pages },
      isFetched,
      isFetchedGenres
    } = this.props;
    const { page } = this.state;

    return (
      <Popular
        isFetched={isFetched}
        isFetchedGenres={isFetchedGenres}
        movies={movies}
        pages={pages}
        page={page}
        start="/"
        next={`/page/${page + 1}`}
        back={`/page/${page - 1}`}
      />
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  isFetching: state.movies.isFetching,
  isFetched: state.movies.isFetched,
  isFetchedGenres: state.genres.isFetched
});

const mapDispatchToProps = dispatch => ({
  getPopularMovies: page => dispatch(actions.getPopularMovies(page)),
  getGenres: () => dispatch(actions.getGenres())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularContainer);
