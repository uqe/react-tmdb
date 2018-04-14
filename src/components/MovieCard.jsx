import React from 'react';
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
  StyledGrow
} from '../ui/MovieCard';
import { fetchGenres, shortOverview, setRandomGradient } from '../helpers';
import { Box } from 'grid-styled';

const MovieCard = ({ genres, movies, favorites, addToFavorites, removeFromFavorites }) => {
  // colors={setRandomGradient()}
  const moviesrender = movies.map(movie => (
    <Box key={movie.original_title} my={2} mx={2}>
      <StyledGrow in {...true && { timeout: 1000 }}>
        <StyledCard key={movie.original_title} poster={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}>
          <Details>
            <StyledCardContent>
              <StyledTypography variant="headline">{movie.title}</StyledTypography>
              <StyledTypography variant="subheading">
                {fetchGenres(genres, movie.genre_ids).join(', ')}
                <StyledDivider />
                {shortOverview(movie.overview)}
              </StyledTypography>
            </StyledCardContent>
            <Buttons>
              {favorites.some(favmovie => favmovie.id === movie.id) ? (
                <StyledButton onClick={() => removeFromFavorites(movie)} size="small">
                  Unfav
                </StyledButton>
              ) : (
                <StyledButton onClick={() => addToFavorites(movie)} size="small">
                  Add to fav
                </StyledButton>
              )}
              <StyledButton size="small" component={({ ...props }) => <Link to={`/movie/${movie.id}`} {...props} />}>
                Learn more
              </StyledButton>
            </Buttons>
          </Details>
          {/* <StyledCardMedia image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} title={movie.title} /> */}
        </StyledCard>
      </StyledGrow>
    </Box>
  ));

  return moviesrender;
};

export default MovieCard;
