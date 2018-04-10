import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import { Flex } from 'grid-styled';
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

export const Container = styled(Flex)`
  justify-content: center;
  flex-wrap: wrap;
  max-width: 992px;
  margin: auto;
`;
