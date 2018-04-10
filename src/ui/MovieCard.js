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
    justify-content: space-between;
    background-color: #f6f8fa;
  }
`;

export const StyledCardContent = styled(CardContent)`
  && {
    flex: 1 0 auto;
    color: pink;
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
    margin: 5px 0px;
    background-color: #cdf;
    padding-top: 1px;
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    color: ${props => (props.variant === 'headline' ? '#364049' : '#687B8E')};
  }
`;

export const StyledButton = styled(Button)`
  && {
    color: #049;
  }
`;
