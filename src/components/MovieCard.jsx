import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  MovieCardInfo as Card,
  Details,
  Information,
  Buttons,
  StyledDivider as Divider,
  Overview,
  Genres,
  StyledButton as Button,
  Title
} from '../ui/MovieCard';
import { setRandomGradient } from '../helpers';
import FavoriteButton from './FavoriteButton';
import More from '@material-ui/icons/More';
import { Loader } from './Loader';
import loadable from '@7rulnik/react-loadable';
import LazyLoad from 'react-lazyload';

const MovieDetailsPage = loadable({
  loader: () => import('../pages/MovieDetailsPage'),
  loading: Loader
});

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
  onMouseOver = () => {
    MovieDetailsPage.preload();
  };

  render() {
    const { all_genres, movie, poster_path, title, overview, id, short } = this.props;

    return (
      <LazyLoad offset={500} height={300}>
        <Card short={short} colors={setRandomGradient()} poster={`https://image.tmdb.org/t/p/w300${poster_path}`}>
          <Information>
            <Details>
              <Title short={short} variant="headline">
                {title}
              </Title>
              <Genres short={short} variant="subheading">
                {all_genres.join(', ')}
              </Genres>
              {short !== true && <Divider />}
              <Overview variant="subheading">{overview}</Overview>
            </Details>
            <Buttons>
              <FavoriteButton movie={movie} id={id} />
              <Button onMouseOver={this.onMouseOver} component={({ ...props }) => <Link to={`/movie/${id}`} {...props} />}>
                <More />
              </Button>
            </Buttons>
          </Information>
        </Card>
      </LazyLoad>
    );
  }
}

export default MovieCard;
