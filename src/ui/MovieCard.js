import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Fade from 'material-ui/transitions/Fade';
import Button from 'material-ui/Button';
import styled from 'styled-components';

export const Animation = styled(Fade)``;

export const MovieCardInfo = styled(Card)`
  && {
    display: flex;
    margin: auto;  
    height: ${props => (props.short === true ? 'auto' : '300px')};
    justify-content: space-between;
    &:hover {
      ${'' /* background-position-y: 30%; */}
    }
    &:active {
      background-image: ${props =>
        `linear-gradient(to left, ${props.colors.second} 0%,  ${props.colors.first} 100%), url(${props.poster})`};
      background-position-y: 50%;
    }
    -webkit-transition:background-position 200ms ease;
    background-image: ${props => `linear-gradient(to left, ${props.colors.first} 0%, ${props.colors.second} 100%), url(${props.poster})`};
    background-size: cover;
    background-position-y: ${props => (props.short === true ? '30%' : '5%')};
    box-shadow: inset 0px 0px 50px -15px rgba(0, 0, 0, 0.3), 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
    ${
      '' /* background-image: ${props => `linear-gradient(to left, rgba(20, 30, 48, 0.5) 0%, rgba(20, 30, 48, 0.5) 100%), url(${props.poster})`}; */
    }
`;

export const Details = styled(CardContent)`
  && {
    flex: 1 0 auto;
  }
`;

export const Information = styled.div`
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
    padding-left: 16px;
    padding-bottom: 8px;

    @media (max-width: 600px) {
      padding-left: 8px;
    }
  }
`;

export const StyledDivider = styled(Divider)`
  && {
    opacity: 0.5;
    margin: 5px 0px;
    background-color: white;
    padding-top: 1px;
  }
`;

export const Title = styled(Typography)`
  && {
    text-shadow: 1px 1px 3px #000;
    color: white;
    opacity: 0.85;
    ${props =>
      props.short && {
        overflow: 'hidden',
        '-webkit-line-clamp': 1,
        'text-overflow': 'elipsis',
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical'
      }};
  }
`;

export const Overview = styled(Typography)`
  && {
    text-shadow: 1px 1px 3px #000;
    color: white;
    opacity: 0.85;
    -webkit-line-clamp: 5;
    max-height: 156px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
