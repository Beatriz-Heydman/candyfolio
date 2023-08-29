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
    background: var(--orange-100);
    border: 2px solid var(--orange-200);
    color: black;
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
    background-color: var(--orange-200);
    color: var(--orange-100);
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card_skills {
    display: flex;
    width: 100%;
    height: 60px;
    border-radius: 0.75rem;
    z-index: -1;
    transition: all cubic-bezier(0.25, 1.5, 0.25, 1) 0.5s;
    border: 2px solid var(--orange-200);
    background: #fff4e9;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;

    li {
      opacity: 0;
      scale: 0.5;
      transition: all cubic-bezier(0.25, 1.5, 0.25, 1) 500ms;
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
