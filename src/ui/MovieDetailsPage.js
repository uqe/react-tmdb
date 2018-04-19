import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Grow from 'material-ui/transitions/Grow';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import styled from 'styled-components';
import Badge from 'material-ui/Badge';
import { withStyles } from 'material-ui';
import { CircularProgress } from 'material-ui/Progress';
import { Flex } from 'grid-styled';

export const StyledCircularProgress = styled(CircularProgress)`
  && {
    color: #cdf;
    display: block;
    margin: auto;
  }
`;

export const StyledTitle = styled(Typography)`
  && {
    color: #687b8e;
    text-decoration: none;
    &:hover {
      color: #364049;
    }
  }
`;
const BlackBadge = withStyles(() => ({ badge: { backgroundColor: '#ffffff66', width: '30px', height: '30px', fontSize: '0.9rem' } }))(
  Badge
);

export const StyledBadge = styled(BlackBadge)`
  && {
    margin-top: -10px;
    margin-right: 18px;
    margin-left: 18px;
  }
`;

export const StyledGrow = styled(Grow)`
  && {
    transform-origin: 0 0 0;
  }
`;

export const StyledCard = styled(Card)`
  && {
    display: flex;
    justify-content: space-between;
    background-color: #f6f8fa;
    margin: auto;
    min-height: 500px;
    background-image: ${props => `linear-gradient(to left, ${props.colors.first} 0%, ${props.colors.second} 100%), url(${props.poster})`};
    background-size: cover;
    background-position-y: 10%;
    box-shadow: inset 0px 0px 50px -15px rgba(0, 0, 0, 0.3), 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
      0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    @media (min-width: 640px) {
      margin-left: 4px;
      margin-right: 4px;
    }
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
    width: 400px;
    height: 600px;
  }
`;

export const Details = styled.div`
  && {
    display: flex;
    flex-direction: column;
    width: 100%;
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
    background-color: white;
    padding-top: 2px;
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    text-shadow: 1px 1px 3px #000;
    color: white;
    opacity: 0.85;
  }
`;

export const StyledButton = styled(Button)`
  && {
    text-shadow: 1px 1px 3px #000;
    color: white;
    opacity: 0.85;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const Container = styled(Flex)`
  justify-content: center;
  flex-wrap: wrap;
  max-width: 992px;
  margin: auto;
`;
