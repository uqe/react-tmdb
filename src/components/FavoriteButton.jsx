import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../actions';
import { StyledButton as Button } from '../ui/FavoriteButton';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

class FavoriteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps) {
    const unfav =
      nextProps.favorites.some(movie => movie.id === nextProps.id) === false &&
      this.props.favorites.some(movie => movie.id === this.props.id) === true;

    // const fav = this.props.id === nextProps.favorites[nextProps.favorites.length - 1].id;
    const fav =
      nextProps.favorites.some(movie => movie.id === nextProps.id) === true &&
      this.props.favorites.some(movie => movie.id === this.props.id) === false;

    // return (
    //   (nextProps.favorites.some(movie => (movie.id === nextProps.id) === true) &&
    //     this.props.favorites.some(movie => movie.id === this.props.id) === false) ||
    //   (nextProps.favorites.some(movie => movie.id === nextProps.id) === false &&
    //     this.props.favorites.some(movie => movie.id === this.props.id) === true)
    // );

    return unfav === true ? unfav : fav;
  }

  render() {
    const { movie, id, favorites, addMovieToFavorites, removeMovieFromFavorites } = this.props;

    return favorites.some(favmovie => favmovie.id === id) ? (
      <Button onClick={() => removeMovieFromFavorites(movie)} size="small">
        <Favorite />
      </Button>
    ) : (
      <Button onClick={() => addMovieToFavorites(movie)} size="small">
        <FavoriteBorder />
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  addMovieToFavorites: id => dispatch(actions.addMovieToFavorites(id)),
  removeMovieFromFavorites: id => dispatch(actions.removeMovieFromFavorites(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
