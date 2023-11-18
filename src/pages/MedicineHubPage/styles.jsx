import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListGrid = styled.div`
  width: 100%;
  max-width: 1180px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 44px;
  > * {
    flex-basis: 262px;
  }
  @media (max-width: 1219px) {
    & > *:nth-child(n + 4) {
      display: none;
    }
  }
  @media (max-width: 910px) {
    & > *:nth-child(n + 3) {
      display: none;
    }
  }
  @media (max-width: 605px) {
    & > *:nth-child(n + 2) {
      display: none;
    }
  }
`;
