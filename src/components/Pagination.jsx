import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const Button = styled(Link)`
  background-color: white;
  color: black;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8em;
  height: 40px;
  box-shadow: unset;
  border-radius: 8px;
  line-height: 40px;
  margin: 0px 8px;
  letter-spacing: 2px;
  min-width: 100px;
  padding: 11px 20px;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid rgb(218, 220, 224);
  transition: border 0.3s linear;
  &:hover {
    background-color: unset;
    border-color: #949496;
  }
`;

const Pagination = ({ pages, page, start, next, back }) => (
  <Wrapper>
    {page > 1 && page !== 2 && <Button to={back}>BACK</Button>}
    {page === 2 && <Button to={start}>BACK</Button>}
    {pages !== page && <Button to={next}>NEXT</Button>}
  </Wrapper>
);

export default Pagination;
