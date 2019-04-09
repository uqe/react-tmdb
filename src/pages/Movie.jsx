import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import gip from 'cssgip-browser';
import { actions } from '../actions';
import { Card, Title, Genres, Description, Badge, Poster, SubSubTitle, SubTitle, Section } from '../ui/MovieDetailsPage';
import { setRandomGradient, fetchRuntime, fetchCertifications, formatMoney } from '../helpers';
import MovieCards from '../components/MovieCards';
import FavoriteButton from '../components/FavoriteButton';
// import BackgroundFetcher from '../components/BackgroundFetcher';

class Movie extends Component {
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
          {/* <style type="text/css">
            {`body {
          background-size: cover;
          background-position-x: center;
          background-repeat: no-repeat;
          background-image: linear-gradient(to bottom,rgba(255, 255, 255, 0.6) 0%, rgb(0, 0, 0) 100%);
        }`}
          </style> */}
        </Helmet>
        <Card poster={movie.backdrop_path}>
          <Title>
            {movie.vote_average !== 0 && <Badge>{movie.vote_average}</Badge>}
            {movie.release_dates.results.filter(country => country.iso_3166_1 === 'US').length !== 0 &&
              fetchCertifications(movie.release_dates) !== false && <Badge>{fetchCertifications(movie.release_dates)}</Badge>}
            <Badge>{movie.release_date.slice(0, 4)}</Badge>
            {`${movie.title}`}
          </Title>
          <Title style={{ fontSize: '1.4rem', opacity: 0.5, marginTop: '-5px' }} variant="headline">
            {movie.tagline}
          </Title>
          <Fragment>{movie.all_genres.length !== 0 && <Genres>{movie.all_genres.join(' • ')}</Genres>}</Fragment>
          <Genres>{fetchRuntime(movie.runtime)}</Genres>
          {movie.budget !== 0 &&
            movie.revenue !== 0 && (
              <Section>
                <SubTitle>Budget / Worldwide Gross</SubTitle>
                <SubSubTitle>{`${formatMoney(movie.budget)} / ${formatMoney(movie.revenue)}`}</SubSubTitle>
              </Section>
            )}
          {movie.credits.crew[0] && (
            <Section>
              <SubTitle>Director</SubTitle>
              <SubSubTitle>{movie.credits.crew[0].name}</SubSubTitle>
            </Section>
          )}
          {movie.credits.crew[1] && (
            <Section>
              <SubTitle>Writor</SubTitle>
              <SubSubTitle> {movie.credits.crew[1].name} </SubSubTitle>
            </Section>
          )}
          {movie.credits.cast.length > 5 && (
            <Section>
              <SubTitle>Stars</SubTitle>
              <SubSubTitle>
                {`${movie.credits.cast
                  .slice(0, 5)
                  .map(star => star.name)
                  .join(', ')} and others`}
              </SubSubTitle>
            </Section>
          )}
          <Section>
            <SubTitle>Overview</SubTitle>
            <SubSubTitle>{movie.overview}</SubSubTitle>
          </Section>
          <Section>
            <FavoriteButton movie={movie} id={movie.id} />
          </Section>
        </Card>
        <MovieCards movies={similar.results} />
      </Fragment>
    ) : (
      <Helmet title="Loading..." />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
