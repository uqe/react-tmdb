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
import { shortOverview } from '../helpers';

const MovieCard = props => {
  const { title, overview, poster, id, genres } = props;

  return (
    <StyledGrow in {...(true ? { timeout: 1000 } : {})}>
      <StyledCard>
        <Details>
          <StyledCardContent>
            <StyledTypography variant="headline">{title}</StyledTypography>
            <StyledTypography variant="subheading">
              {genres.join(', ')}
              <StyledDivider />
              {shortOverview(overview)}
            </StyledTypography>
          </StyledCardContent>
          <Buttons>
            <StyledButton disabled size="small">
              Add to my list
            </StyledButton>
            <StyledButton size="small" component={({ ...props }) => <Link to={`/movie/${id}`} {...props} />}>
              Learn more
            </StyledButton>
          </Buttons>
        </Details>
        <StyledCardMedia image={`https://image.tmdb.org/t/p/w300${poster}`} title={title} />
      </StyledCard>
    </StyledGrow>
  );
};

export default MovieCard;
