import { styled } from "styled-components";
import { CardTechProps } from "./types";

export const StyledCardTechLanguage = styled.div<CardTechProps>`
  /* height: 60px; */
  min-width: 250px;
  position: relative;
  transition: all cubic-bezier(0.25, 1.5, 0.25, 1) 0.5s;

  /* &:hover {
    margin-bottom: 250px;
  } */

  .card_language_tech {
    position: absolute;
    width: 100%;
    height: 60px;
    border-radius: 0.75rem;
    background-color: ${({ backgroundColor = "" }) => backgroundColor};
    border: 2px solid;
    border-color: ${({ borderColor = "" }) => borderColor};
    color: ${({ color = "" }) => color};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    gap: 0.75rem;
    cursor: pointer;
    z-index: 1;
  }

  .ball_language_icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: ${({ backgroundColor = "" }) => backgroundColor};
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ borderColor = "" }) => borderColor};
  }

  .card_skills {
    display: flex;
    width: 100%;
    height: 60px;
    border-radius: 0.75rem;
    z-index: -1;
    transition: all cubic-bezier(0.25, 1.5, 0.25, 1) 0.5s;
    border: 2px solid;
    border-color: ${({ borderColor = "" }) => borderColor};
    background-color: ${({ backgroundColor = "" }) => backgroundColor}66;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    filter: brightness(1.15);

    li {
      opacity: 0;
      scale: 0.5;
      transition: all cubic-bezier(0.25, 1.5, 0.25, 1) 500ms;
      color: ${({ color = "" }) => color};
    }
  }

  .skills_content {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  .card_language_tech:hover + .card_skills {
    height: 250px;

    li {
      scale: 1;
      opacity: 1;
    }
  }
`;
