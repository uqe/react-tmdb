import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import { CircularProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';

export const StyledButton = styled(Button)`
  && {
    text-shadow: 1px 1px 3px #000;
    color: #01d277;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  && {
    justify-content: flex-start;
    min-height: 64px;
    @media (max-width: 600px) {
      padding-left: 8px;
      padding-right: 8px;
    }
  }
`;

export const StyledAppBar = styled(AppBar)`
  && {
    margin-bottom: 10px;
    background-size: cover;
    background-position-y: 20%;
    height: 64px;
    background-color: #081c24;
  }
`;

export const AppName = styled(Typography)`
  && {
    margin-right: 10px;
    text-transform: uppercase;
    opacity: 0.85;
    text-shadow: 1px 1px 3px #000;
    color: white;
    flex: 1;
    text-decoration: none;
    &:hover {
      color: #364049;
    }
  }
`;

export const StyledCircularProgress = styled(CircularProgress)`
  && {
    color: #cdf;
    display: block;
    margin: auto;
  }
`;
