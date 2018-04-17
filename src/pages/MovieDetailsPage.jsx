import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { actions } from '../actions';
import { Flex, Box } from 'grid-styled';
import { Link } from 'react-router-dom';
import {
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  Details,
  Buttons,
  StyledDivider,
  StyledTypography,
  StyledButton,
  StyledGrow,
  StyledBadge,
  StyledTitle,
  StyledCircularProgress,
  Container
} from '../ui/MovieDetailsPage';
import { setRandomGradient } from '../helpers';
import AppBar from '../components/AppBar';
import MovieCard from '../components/MovieCard';
import FavoriteButton from '../components/FavoriteButton';

class MovieDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { id: null };

    this.getCurrentMovie = this.getCurrentMovie.bind(this);
  }

  componentDidMount = () => {
    this.props.genres === undefined && this.props.getGenres();
    this.getCurrentMovie(this.props, true);
  };

  componentWillReceiveProps = nextProps => {
    this.props.match.params.id !== nextProps.match.params.id ? this.getCurrentMovie(nextProps, true) : this.getCurrentMovie(nextProps);
  };

  getCurrentMovie = (props, fetchInfo = false) => {
    fetchInfo &&
      this.setState({ id: parseInt(props.match.params.id, 10) }, () => {
        this.props.getMovieDetails(this.state.id);
        this.props.getMovieRecommendations(this.state.id, 1);
      });
  };

  render() {
    const { movie, isFetching, isFetched, recommendations, isFetchingRecommendations, isFetchedRecommendations } = this.props;

    return isFetched && isFetchedRecommendations ? (
      <Fragment>
        <Helmet title={movie.title} />
        <Container>
          <AppBar isFetching={isFetching} />
          <StyledGrow in {...(true ? { timeout: 1000 } : {})}>
            <Box width={1} my={2} mx={2}>
              <StyledCard colors={setRandomGradient()} poster={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}>
                <Details>
                  <StyledCardContent>
                    <StyledTypography variant="headline">{`${movie.title} (${movie.release_date.slice(0, 4)})`}</StyledTypography>
                    <StyledBadge color="primary" badgeContent={movie.vote_average} />
                    <StyledTypography variant="subheading">
                      {movie.all_genres.join(', ')}
                      <StyledDivider />
                      <StyledTypography variant="headline">Overview</StyledTypography>
                      {movie.overview}
                    </StyledTypography>
                  </StyledCardContent>
                  <Buttons>
                    <FavoriteButton movie={movie} id={movie.id} />
                    <StyledButton
                      size="small"
                      component={({ ...props }) => (
                        <Link
                          to={`/movie/${recommendations.results[Math.floor(Math.random() * recommendations.results.length)].id}`}
                          {...props}
                        />
                      )}
                    >
                      random silimar movie
                    </StyledButton>
                  </Buttons>
                </Details>
              </StyledCard>
            </Box>
          </StyledGrow>
          {recommendations.results.map(movie => (
            <Box width={[1, 0.7, 0.55, 0.48]} key={movie.original_title} my={2} mx={2}>
              <MovieCard
                short
                movie={movie}
                poster_path={movie.poster_path}
                title={movie.title}
                all_genres={movie.all_genres}
                id={movie.id}
              />
            </Box>
          ))}
        </Container>
      </Fragment>
    ) : (
      <Fragment>
        <Container>
          <Helmet title="Loading..." />
          <AppBar isFetched={!isFetched} />
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie.results,
  isFetching: state.movie.isFetching,
  isFetched: state.movie.isFetched,
  recommendations: state.recommendations,
  isFetchingRecommendations: state.recommendations.isFetching,
  isFetchedRecommendations: state.recommendations.isFetched,
  favorites: state.favorites,
  genres: state.genres.genres,
  isFetchedGenres: state.genres.isFetched
});

const mapDispatchToProps = dispatch => ({
  getGenres: () => dispatch(actions.getGenres()),
  getMovieDetails: id => dispatch(actions.getMovieDetails(id)),
  getMovieRecommendations: (id, page) => dispatch(actions.getMovieRecommendations(id, page)),
  addMovieToFavorites: id => dispatch(actions.addMovieToFavorites(id)),
  removeMovieFromFavorites: id => dispatch(actions.removeMovieFromFavorites(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
