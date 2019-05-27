import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { actions } from '../actions';

const AddButton = styled.button`
  font-family: 'Roboto Mono', monospace;
  color: black;
  cursor: pointer;
  height: 32px;
  font-size: 0.8em;
  text-align: initial;
  border: unset;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 32px;
  background-color: white;
  :focus {
    outline: none !important;
  }
`;
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
      <AddButton
        onClick={event => {
          event.preventDefault();
          removeMovieFromFavorites(movie);
        }}
      >
        REMOVE FROM MY LIST
      </AddButton>
    ) : (
      <AddButton
        onClick={event => {
          event.preventDefault();
          addMovieToFavorites(movie);
        }}
      >
        ADD TO MY LIST
      </AddButton>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteButton);
