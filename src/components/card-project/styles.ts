//Libs
import { styled } from "styled-components";

//Types
import { StyledCardProjectProps } from "./types";

export const StyledCardProject = styled.div<StyledCardProjectProps>`
  width: 300px;
  height: 170px;
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;
  background-image: ${({ backgroundImage = "" }) => `url(${backgroundImage})`};
  background-size: contain;
  transition: all ease 0.4s;

  &:hover {
    margin-bottom: 140px;
  }

  .card_content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
    height: 100%;
    cursor: default;
    background-color: var(--pink-100);
    border: 3px solid var(--pink-300);
    border-radius: 0.75rem;
    transition: all 0.4s;
  }

  &:hover ~ .balls_tech_container {
    .ball_tech {
      transform: translateX(0px);
      opacity: 1;
      z-index: -1;
      filter: blur(0px);
    }
  }

  &:hover .card_content {
    transform: translateY(135px);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`;
