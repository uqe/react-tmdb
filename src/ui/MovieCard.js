import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Grow from 'material-ui/transitions/Grow';
import Button from 'material-ui/Button';
import styled from 'styled-components';

export const StyledGrow = styled(Grow)`
  && {
    transform-origin: 0 0 0;
  }
`;

export const StyledCard = styled(Card)`
  && {
    display: flex;
    max-width: 480px;
    height: 300px;
    justify-content: space-between;
    background-size: cover;
    background-position-y: 5%;
    background-image: ${props => `linear-gradient(to left, rgba(20, 30, 48, 0.5) 0%, rgba(20, 30, 48, 0.5) 100%), url(${props.poster})`};
    ${
      '' /* background-image: ${props => `linear-gradient(to left, ${props.colors.first} 0%, ${props.colors.second} 100%), url(${props.poster})`}; */
    }
`;

export const StyledCardContent = styled(CardContent)`
  && {
    flex: 1 0 auto;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  && {
    display: flex;
    width: 200px;
    height: 300px;
  }
`;

export const Details = styled.div`
  && {
    display: flex;
    flex-direction: column;
  }
`;

export const Buttons = styled.div`
  && {
    display: flex;
    align-items: center;
    padding-left: 8px;
    padding-bottom: 8px;
  }
`;

export const StyledDivider = styled(Divider)`
  && {
    opacity: 0.5;
    margin: 5px 0px;
    background-color: #cdf;
    padding-top: 1px;
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    text-shadow: 1px 1px 1px #000;
    color: ${props => (props.variant === 'headline' ? 'white' : 'white')};
    opacity: 0.85;
  }
`;

export const StyledButton = styled(Button)`
  && {
    text-shadow: 1px 1px 1px #000;
    color: white;
  }
`;
