import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';

import styled from 'styled-components';

export const StyledTitle = styled(Typography)`
  && {
    color: #687b8e;
  }
`;

export const StyledCircularProgress = styled(CircularProgress)`
  && {
    color: #cdf;
    display: block;
    margin: auto;
  }
`;
