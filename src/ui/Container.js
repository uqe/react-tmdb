import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 20px 20px;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 972px) {
    padding: 0px 16px;
  }
  @media (max-width: 768px) {
    padding: 0px 8px;
  }
`;
