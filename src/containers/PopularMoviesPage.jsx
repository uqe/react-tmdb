import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actions } from '../actions';
import MovieCard from '../components/MovieCard';
import { Flex, Box } from 'grid-styled';
import { fetchGenres } from '../helpers';
import Pagination from '../components/Pagination';
import { StyledCircularProgress, StyledTitle } from '../ui/PopularMoviesPage';

class PopularMoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null
    };

    this.getCurrentPage = this.getCurrentPage.bind(this);
  }

  componentDidMount = () => {
    this.getCurrentPage(this.props);
    this.props.getGenres();
  };

  componentWillReceiveProps = nextProps => {
    this.props.match.params.page !== nextProps.match.params.page && this.getCurrentPage(nextProps);
  };

  getCurrentPage = props => {
    this.setState({ page: props.match.params.page === undefined ? 1 : parseInt(props.match.params.page, 10) }, () => {
      this.props.getPopularMovies(this.state.page);
      this.state.page === 1 ? (document.title = 'TMDb') : (document.title = `TMDb | Page ${this.state.page}`);
    });
  };

  render() {
    const { AllGenres, movies, isFetching, isFetched, isFetchedGenres } = this.props;
    const { page } = this.state;

    return (
      <Fragment>
        <StyledTitle variant="display2" align="center" gutterBottom>
          TMDb
        </StyledTitle>
        {isFetching && <StyledCircularProgress size={100} />}
        <Flex
          style={{
            justifyContent: 'center',
            flexWrap: 'wrap',
            maxWidth: '1126px',
            margin: 'auto'
          }}
        >
          {isFetched &&
            isFetchedGenres &&
            movies.results.map(movie => (
              <Box key={movie.id} p={2}>
                <MovieCard
                  genres={fetchGenres(AllGenres, movie.genre_ids)}
                  title={movie.title}
                  overview={movie.overview}
                  id={movie.id}
                  poster={movie.poster_path}
                />
              </Box>
            ))}
          <Box p={2}>
            <Pagination page={page} />
          </Box>
        </Flex>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.response,
  isFetching: state.movies.isFetching,
  isFetched: state.movies.isFetched,
  AllGenres: state.genres,
  isFetchedGenres: state.genres.isFetched
});

const mapDispatchToProps = dispatch => ({
  getPopularMovies: page => dispatch(actions.getPopularMovies(page)),
  getGenres: () => dispatch(actions.getGenres())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopularMoviesPage);
