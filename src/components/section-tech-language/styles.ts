//Libs
import { styled } from "styled-components";

export const StyledSectionTechLanguage = styled.section`
  width: 90%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;

  .card_language_tech_container {
    width: 100%;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 750px) {
    .card_language_tech_container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;
