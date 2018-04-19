import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  MovieCardInfo as Card,
  Details,
  Information,
  Buttons,
  StyledDivider as Divider,
  Overview,
  StyledButton as Button,
  Animation,
  Title
} from '../ui/MovieCard';
import { setRandomGradient } from '../helpers';
import FavoriteButton from './FavoriteButton';
import More from '@material-ui/icons/More';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    // console.log(this.props);
    // console.log(nextProps);
  }

  // shouldComponentUpdate(nextProps) {
  //   const unfav =
  //     nextProps.favorites.some(movie => movie.id === nextProps.id) === false &&
  //     this.props.favorites.some(movie => movie.id === this.props.id) === true;

  //   // const fav = this.props.id === nextProps.favorites[nextProps.favorites.length - 1].id;
  //   const fav =
  //     nextProps.favorites.some(movie => movie.id === nextProps.id) === true &&
  //     this.props.favorites.some(movie => movie.id === this.props.id) === false;

  //   // return (
  //   //   (nextProps.favorites.some(movie => (movie.id === nextProps.id) === true) &&
  //   //     this.props.favorites.some(movie => movie.id === this.props.id) === false) ||
  //   //   (nextProps.favorites.some(movie => movie.id === nextProps.id) === false &&
  //   //     this.props.favorites.some(movie => movie.id === this.props.id) === true)
  //   // );

  //   return unfav === true ? unfav : fav;
  // }

  render() {
    const { all_genres, movie, poster_path, title, overview, id, short } = this.props;

    return (
      // <Animation in {...true && { timeout: 500 }}>
      <Card short={short} colors={setRandomGradient()} poster={`https://image.tmdb.org/t/p/w300${poster_path}`}>
        <Information>
          <Details>
            <Title short={short} variant="headline">
              {title}
            </Title>
            <Overview variant="subheading">
              {all_genres.join(', ')}
              {short !== true && <Divider />}
              {overview}
            </Overview>
          </Details>
          <Buttons>
            {/* {favorites.some(favmovie => favmovie.id === id) ? (
              <Button onClick={() => removeMovieFromFavorites(movie)} size="small">
                Unfav
              </Button>
            ) : (
              <Button onClick={() => addMovieToFavorites(movie)} size="small">
                Add to fav
              </Button>
            )} */}
            <FavoriteButton movie={movie} id={id} />
            <Button size="small" component={({ ...props }) => <Link to={`/movie/${id}`} {...props} />}>
              <More />
            </Button>
          </Buttons>
        </Information>
      </Card>
      // </Animation>
    );
  }
}

export default MovieCard;
