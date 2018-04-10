import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import { CircularProgress } from 'material-ui/Progress';
import SearchBar from 'material-ui-search-bar';

export const StyledAppBar = styled(AppBar)`
  && {
    margin-bottom: 10px;
    background-color: #00838f;
  }
`;

export const AppName = styled(Typography)`
  && {
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

export const StyledSearchBar = styled(SearchBar)`
  && {
    margin: 0 auto;
    max-width: 800px;
  }
`;
