//Libs
import { styled } from "styled-components";

//Types
import { CardTechLanguageProps } from "./types";

export const StyledCardTechLanguage = styled.div<CardTechLanguageProps>`
  min-width: 250px;
  position: relative;
  transition: all cubic-bezier(0.25, 1.5, 0.25, 1) 0.5s;

  .card_language_tech {
    position: absolute;
    width: 100%;
    height: 60px;
    border-radius: 0.75rem;
    border: 2px solid;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    gap: 0.75rem;
    cursor: pointer;
    z-index: 1;

    border-color: ${({ borderColor = "" }) => borderColor};
    color: ${({ color = "" }) => color};
    background-color: ${({ backgroundColor = "" }) => backgroundColor};
  }

  .ball_language_icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ borderColor = "" }) => borderColor};
    color: ${({ backgroundColor = "" }) => backgroundColor};
  }

  .card_skills {
    display: flex;
    width: 100%;
    height: 60px;
    border-radius: 0.75rem;
    z-index: -1;
    transition: all cubic-bezier(0.25, 1.5, 0.25, 1) 0.5s;
    border: 2px solid;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;

    border-color: ${({ borderColor = "" }) => borderColor};
    background-color: ${({ backgroundColor = "" }) => backgroundColor}66;

    li {
      opacity: 0;
      scale: 0.5;
      transition: all cubic-bezier(0.25, 1.5, 0.25, 1) 500ms;
      color: ${({ color = "" }) => color};
      list-style: inside;
    }
  }

  .skills_content {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    padding-left: 2rem;
  }

  .card_language_tech:hover + .card_skills {
    height: 250px;

    li {
      scale: 1;
      opacity: 1;
    }
  }

  .card_skills:hover {
    height: 250px;

    li {
      scale: 1;
      opacity: 1;
    }
  }
`;
