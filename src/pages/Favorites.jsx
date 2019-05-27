import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Sorry } from '../ui/Sorry';
import { actions } from '../actions';
import MovieCards from '../components/MovieCards';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    if (!this.props.genres) {
      this.props.getGenres();
    }
  };

  componentWillReceiveProps = nextProps => {
    this.props.favorites.length === nextProps.favorites.length && window.scrollTo(0, 0);
  };

  render() {
    const { isFetchedGenres, favorites } = this.props;

    return isFetchedGenres ? (
      <Fragment>
        <Helmet title="Favorites Movies">
          <meta name="theme-color" content="#081c24" />
        </Helmet>
        {favorites.length !== 0 ? <MovieCards movies={favorites} /> : <Sorry>No favorite movies :(</Sorry>}
      </Fragment>
    ) : (
      <Helmet title="Loading..." />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
