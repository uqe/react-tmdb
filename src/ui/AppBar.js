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
    border-radius: 0px 0px 2px 2px;
    background-size: cover;
    background-position-y: 20%;
    ${'' /* background-color: #00838f; */} height: 64px;
    background-color: #081c24;
    ${'' /* background-image: linear-gradient(to left, rgba(20, 30, 48, 0.4) 0%, rgba(36, 59, 85, 0.7) 100%),
      url(https://image.tmdb.org/t/p/original/lkOZcsXcOLZYeJ2YxJd3vSldvU4.jpg); */};
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

// export const StyledSearchBar = styled(SearchBar)`
//   ${'' /* margin: 0 auto;
//   max-width: 800px;
//   flex: 8; */};
// `;
