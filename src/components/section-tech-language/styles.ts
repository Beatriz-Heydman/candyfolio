//Libs
import { styled } from "styled-components";

export const CardLanguageTechContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;
