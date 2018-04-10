import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import styled from 'styled-components';
import { Box } from 'grid-styled';

const StyledButton = styled(Button)`
  && {
    background-color: #049;
    color: white;
    height: 40px;
    margin: 0px 10px;
    &:hover {
      background-color: #364049;
    }
  }
  }
`;

const Pagination = props => {
  const { page, start, next, back } = props;

  return (
    <Box p={2}>
      {page > 1 &&
        page !== 2 && (
          <StyledButton variant="raised" component={({ ...props }) => <Link to={back} {...props} />}>
            Back
          </StyledButton>
        )}
      {page === 2 && (
        <StyledButton variant="raised" component={({ ...props }) => <Link to={start} {...props} />}>
          Back
        </StyledButton>
      )}
      <StyledButton variant="raised" component={({ ...props }) => <Link to={next} {...props} />}>
        Next
      </StyledButton>
    </Box>
  );
};

export default Pagination;
