import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { actions } from '../actions';
import { Box } from 'grid-styled';
import {
  StyledCard,
  StyledCardContent,
  Details,
  Buttons,
  StyledDivider,
  StyledTypography,
  StyledBadge,
  Container
} from '../ui/MovieDetailsPage';
import { setRandomGradient, fetchRuntime, fetchCertifications, formatMoney } from '../helpers';
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
    this.props.getGenres();
    this.getCurrentMovie(this.props, true);
  };

  componentWillReceiveProps = nextProps => {
    this.props.match.params.id !== nextProps.match.params.id ? this.getCurrentMovie(nextProps, true) : this.getCurrentMovie(nextProps);
  };

  getCurrentMovie = (props, fetchInfo = false) => {
    fetchInfo &&
      this.setState({ id: parseInt(props.match.params.id, 10) }, () => {
        this.props.getMovieDetails(this.state.id);
        this.props.getSimilarMovies(this.state.id, 1);
      });
  };

  render() {
    const { movie, isFetching, isFetched, similar, isFetchingSimilar, isFetchedSimilar } = this.props;

    return isFetched && isFetchedSimilar ? (
      <Fragment>
        <Helmet title={`${movie.title} (${movie.release_date.slice(0, 4)})`}>
          <style type="text/css">{`
        body {
          background-image: linear-gradient(to left,rgba(183, 183, 183, 0.9) 0%,rgba(60, 60, 60, 0.8) 100%),url(https://image.tmdb.org/t/p/original${
            movie.poster_path
          });
          background-position-x: center;
          background-size: cover;
        }
    `}</style>
        </Helmet>
        <Container>
          <AppBar isFetching={isFetching} />
          <Box width={1} my={2} mx={2}>
            <StyledCard colors={setRandomGradient()} poster={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}>
              <Details>
                <StyledCardContent>
                  <StyledTypography variant="headline" style={{ fontSize: '1.85rem' }}>
                    {movie.vote_average !== 0 && <StyledBadge color="primary" badgeContent={movie.vote_average} />}
                    {movie.release_dates.results.filter(country => country.iso_3166_1 === 'US').length !== 0 &&
                      fetchCertifications(movie.release_dates) !== false && (
                        <StyledBadge color="primary" badgeContent={fetchCertifications(movie.release_dates)} />
                      )}
                    {`${movie.title} (${movie.release_date.slice(0, 4)})`}
                  </StyledTypography>
                  <StyledTypography style={{ fontSize: '1.4rem', opacity: 0.5 }} variant="headline">
                    {movie.tagline}
                  </StyledTypography>
                  <StyledTypography variant="subheading">
                    {movie.all_genres.length !== 0 && (
                      <Fragment>
                        {movie.all_genres.join(', ')} <br />
                      </Fragment>
                    )}
                    {fetchRuntime(movie.runtime)}
                    <StyledDivider />
                    {movie.budget !== 0 &&
                      movie.revenue !== 0 && (
                        <Fragment>
                          <StyledTypography variant="headline">Budget / Worldwide Gross</StyledTypography>
                          {`${formatMoney(movie.budget)} / ${formatMoney(movie.revenue)}`}
                        </Fragment>
                      )}
                    {movie.credits.crew[0] !== undefined && (
                      <Fragment>
                        <StyledTypography variant="headline">Director</StyledTypography>
                        {movie.credits.crew[0].name}
                      </Fragment>
                    )}
                    {movie.credits.crew[1] !== undefined && (
                      <Fragment>
                        <StyledTypography variant="headline">Writor</StyledTypography>
                        {movie.credits.crew[1].name}
                      </Fragment>
                    )}
                    {movie.credits.cast.length > 5 && (
                      <Fragment>
                        <StyledTypography variant="headline">Stars</StyledTypography>
                        {`${movie.credits.cast
                          .slice(0, 5)
                          .map(star => star.name)
                          .join(', ')} and others`}
                      </Fragment>
                    )}
                    <StyledTypography variant="headline">Overview</StyledTypography>
                    {movie.overview}
                  </StyledTypography>
                </StyledCardContent>
                <Buttons>
                  <FavoriteButton movie={movie} id={movie.id} />
                </Buttons>
              </Details>
            </StyledCard>
          </Box>
          {similar.results.map(movie => (
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
  similar: state.similar,
  isFetchingSimilar: state.similar.isFetching,
  isFetchedSimilar: state.similar.isFetched,
  favorites: state.favorites,
  isFetchedGenres: state.genres.isFetched
});

const mapDispatchToProps = dispatch => ({
  getGenres: () => dispatch(actions.getGenres()),
  getMovieDetails: id => dispatch(actions.getMovieDetails(id)),
  getSimilarMovies: (id, page) => dispatch(actions.getSimilarMovies(id, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
