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
import { renderGenres } from '../helpers';
import AppBar from '../components/AppBar';

class MovieDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { id: null };

    this.getCurrentMovie = this.getCurrentMovie.bind(this);
  }

  componentDidMount = () => {
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
        <AppBar isFetching={isFetching} />
        <Container>
          <StyledGrow in {...(true ? { timeout: 1000 } : {})}>
            <Box pt={2}>
              <StyledCard>
                <Details>
                  <StyledCardContent>
                    <StyledTypography variant="headline">{`${movie.title} (${movie.release_date.slice(0, 4)})`}</StyledTypography>
                    <StyledBadge color="primary" badgeContent={movie.vote_average} />
                    <StyledTypography variant="subheading">
                      {renderGenres(movie.genres)}
                      <StyledDivider />
                      <StyledTypography variant="headline">Overview</StyledTypography>
                      {movie.overview}
                    </StyledTypography>
                  </StyledCardContent>
                  <Buttons>
                    <StyledButton disabled size="small">
                      Add to my list
                    </StyledButton>
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
                <StyledCardMedia image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title={movie.title} />
              </StyledCard>
            </Box>
          </StyledGrow>
        </Container>
      </Fragment>
    ) : (
      <Fragment>
        <Helmet title="Loading..." />
        <AppBar isFetched={!isFetched} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie,
  isFetching: state.movie.isFetching,
  isFetched: state.movie.isFetched,
  recommendations: state.recommendations,
  isFetchingRecommendations: state.recommendations.isFetching,
  isFetchedRecommendations: state.recommendations.isFetched
});

const mapDispatchToProps = dispatch => ({
  getMovieDetails: id => dispatch(actions.getMovieDetails(id)),
  getMovieRecommendations: (id, page) => dispatch(actions.getMovieRecommendations(id, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
