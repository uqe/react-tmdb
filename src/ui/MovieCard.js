import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
  display: grid;
  -webkit-text-decoration: none;
  text-decoration: none;
  cursor: pointer;
  padding: 16px;
  @media (max-width: 425px) {
    gap: 12px 12px;
    padding: 12px;
    grid-template-columns: 1fr 100px;
    border-radius: 6px;
  }
  gap: 16px 16px;
  height: 100%;
  box-sizing: border-box;
  grid-template-columns: 1fr 120px;
  grid-template-rows: 1fr auto;
  border-radius: 8px;
  border: 1px solid rgb(218, 220, 224);
  -webkit-transition: border 0.3s linear;
  transition: border 0.3s linear;
  /* min-height: 300px; */
  text-decoration: none;
  /* min-height: ${props => (props.short === true ? 'auto' : '300px')}; */
  :hover {
    /* background: rgba(245, 245, 245, 0.3); */
    border-color: #949496;
  }
`;

export const Information = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(max-content, max-content) minmax(max-content, max-content) minmax(max-content, max-content);
`;

export const Title = styled.h2`
  margin: 0px;
  @media (max-width: 425px) {
    font-size: 1.4em;
  }
  color: black;
  font-family: 'Product Sans';
  font-size: 1.6em;
`;

export const Genres = styled.h3`
  margin: 0px 0px 0px 0px;
  letter-spacing: 0.25px;
  font-size: 0.8em;
  @media (max-width: 425px) {
    font-size: 0.7em;
    letter-spacing: 0.15px;
  }
  font-family: 'Roboto Mono', monospace;
  color: rgba(0, 0, 0, 0.6);
`;

export const Description = styled.p`
  font-size: 0.95em;
  @media (max-width: 425px) {
    font-size: 0.85em;
    -webkit-line-clamp: 5;
  }
  font-family: 'Product Sans';
  font-weight: 300;
  margin: 12px 0px 0px 0px;
  color: rgba(0, 0, 0, 0.65);
  letter-spacing: 0.3px;
  -webkit-line-clamp: 7;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Poster = styled.img`
  max-width: 120px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  @media (max-width: 425px) {
    max-width: 100px;
    border-radius: 6px;
  }
  /* transition: max-width 0.2s linear;
:hover {
  max-width: 200px;
} */
`;
