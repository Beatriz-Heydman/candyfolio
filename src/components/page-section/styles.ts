import styled from "styled-components";

export const PageSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 1280px;
  padding-top: 3rem;

  @media (max-width: 1279px) {
    max-width: 90%;
  }
`;
