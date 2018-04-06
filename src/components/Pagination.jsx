import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import styled from 'styled-components';

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
  const { page } = props;

  return (
    <Fragment>
      {page > 1 && (
        <StyledButton variant="raised" component={({ ...props }) => <Link to={`/${page - 1}`} {...props} />}>
          Back
        </StyledButton>
      )}
      <StyledButton variant="raised" component={({ ...props }) => <Link to={`/${page + 1}`} {...props} />}>
        Next
      </StyledButton>
    </Fragment>
  );
};

export default Pagination;
