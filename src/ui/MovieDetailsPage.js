import styled from 'styled-components';

export const Badge = styled.span`
  /* position: relative; */
  /* display: inline-block; */
  /* width: 16px;
  height: 16px; */
  background-color: black;
  border-radius: 50%;
  /* padding: 5px; */
  color: white;
  font-size: 0.9rem;

  text-align: center;
  margin-right: 8px;

  width: 36px;
  height: 36px;
  @media (max-width: 425px) {
    width: 28px;
    height: 28px;
    line-height: 28px;
    font-size: 0.7rem;
  }
  /* background-color: black; */
  /* border-radius: 50%; */
  /* padding: 5px; */
  /* color: white; */
  /* font-size: 1rem; */
  line-height: 36px;
`;

export const Section = styled.div`
  margin: 16px 0px 0px 0px;
`;

export const Card = styled.div`
    background-image: ${props =>
      `linear-gradient(to bottom,rgba(255,48,51,0) 0%,rgba(255, 255, 255, 0.98) 55%,rgb(255, 255, 255) 60%,rgba(255,255,255,1) 100%), url(https://image.tmdb.org/t/p/w1280/${
        props.poster
      })`};

      background-position-x: center;
    background-position-y: -30%;
  /* background-color: pink; */
  display: grid;
  -webkit-text-decoration: none;
  text-decoration: none;
  /* cursor: pointer; */
  padding: 256px 16px 16px 16px;
  @media (max-width: 425px) {
    /* gap: 12px 12px; */
    padding: 256px 12px 12px 12px;
    grid-template-columns: 1fr;
    /* grid-template-columns: 1fr 100px; */
    border-radius: 6px;
  }
  /* gap: 16px 16px; */
  height: 100%;
  box-sizing: border-box;
  grid-template-columns: 1fr;
  /* grid-template-rows: 1fr auto; */
  grid-template-rows: minmax(max-content,max-content) minmax(max-content,max-content) minmax(max-content,max-content);
  border-radius: 8px;
  /* border: 1px solid rgb(218, 220, 224); */
  -webkit-transition: border 0.3s linear;
  transition: border 0.3s linear;
  /* min-height: 300px; */
  /* text-decoration: none; */
  /* min-height: ${props => (props.short === true ? 'auto' : '300px')}; */
  :hover {
    /* background: rgba(245, 245, 245, 0.3); */
    border-color: #949496;
  };
`;

export const Poster = styled.img`
  max-width: 100px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  /* grid-row: 1; */
  @media (max-width: 425px) {
    /* grid-row: 1; */
    max-width: 50%;
    border-radius: 6px;
  }
  /* transition: max-width 0.2s linear;
:hover {
  max-width: 200px;
} */
`;

export const Title = styled.h1`
  margin: 0px;
  align-items: center;
  display: flex;
  @media (max-width: 425px) {
    font-size: 2em;
  }
  color: black;
  font-family: 'Product Sans';
  font-size: 3em;
`;

export const Genres = styled.h3`
  margin: 0px 0px 0px 0px;
  letter-spacing: 0.25px;
  font-size: 0.95em;
  @media (max-width: 425px) {
    font-size: 0.8em;
    letter-spacing: 0.15px;
  }
  font-family: 'Roboto Mono', monospace;
  color: rgba(0, 0, 0, 0.6);
`;

export const SubSubTitle = styled.h3`
  margin: 0px 0px 0px 0px;
  letter-spacing: 0.25px;
  font-size: 0.9em;
  @media (max-width: 425px) {
    font-size: 0.7em;
    /* letter-spacing: 0.15px; */
  }
  font-family: 'Roboto Mono', monospace;
  color: rgba(0, 0, 0, 0.5);
`;

export const SubTitle = styled.h3`
  margin: 0px;
  /* margin: 0px 0px 0px 0px; */
  /* letter-spacing: 0.25px; */
  font-size: 1.4em;
  @media (max-width: 425px) {
    font-size: 1em;
    /* letter-spacing: 0.15px; */
  }
  font-family: 'Product Sans';
  color: black;
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
