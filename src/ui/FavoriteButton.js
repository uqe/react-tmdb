import Button from 'material-ui/Button';
import styled from 'styled-components';
import IconButton from 'material-ui/IconButton';

export const StyledButton = styled(IconButton)`
  && {
    color: white;
    opacity: 0.85;
    ${'' /* margin-left: -14px;
    padding-top: 8px;
    padding-bottom: 8px;

    @media (max-width: 600px) {
      margin-left: -8px;
    } */};
  }
`;
