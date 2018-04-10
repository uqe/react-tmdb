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
import { fetchGenres, shortOverview } from '../helpers';
import { Box } from 'grid-styled';

const MovieCard = ({ genres, movies }) =>
  movies.map(movie => (
    <Box key={movie.id} my={1} mx={2}>
      <StyledGrow in {...(true ? { timeout: 1000 } : {})}>
        <StyledCard>
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
              <StyledButton disabled size="small">
                Add to my list
              </StyledButton>
              <StyledButton size="small" component={({ ...props }) => <Link to={`/movie/${movie.id}`} {...props} />}>
                Learn more
              </StyledButton>
            </Buttons>
          </Details>
          <StyledCardMedia image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} title={movie.title} />
        </StyledCard>
      </StyledGrow>
    </Box>
  ));

export default MovieCard;
