//Libs
import { styled } from "styled-components";

export const StyledCardTechDescription = styled.div`
  max-width: 850px;
  align-items: flex-start;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 1.7rem;

  .card {
    color: ${({ color = "" }) => color};
  }

  .name {
    font-weight: 600;
    font-size: 1.5rem;
  }

  @media (max-width: 400px) {
    name {
      font-size: 1.2rem;
    }

    .description {
      font-size: 0.9rem;
    }
  }
`;
