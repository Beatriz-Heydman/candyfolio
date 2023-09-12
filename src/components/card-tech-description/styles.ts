//Libs
import { styled } from "styled-components";
import { StyledCardTechDescriptionProps } from "./types";

export const StyledCardTechDescription = styled.div<StyledCardTechDescriptionProps>`
  max-width: 850px;
  align-items: flex-start;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 1.7rem;
  transition: all ease 0.2s;

  &.changing_tech {
    opacity: 0;
    transform: translateY(50px);
  }

  .card {
    color: ${({ textColor = "" }) => textColor};
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
