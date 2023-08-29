//Libs
import { styled } from "styled-components";

//Types
import { BallLanguageTechProps } from "./types";

export const BallLanguageTech = styled.div<BallLanguageTechProps>`
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ backgroundColor = "#fff" }) => backgroundColor};
  border: ${({ border = "2px solid #fff" }) => border};
  transition: all cubic-bezier(0.25, 1.5, 0.25, 1) 0.5s;
  filter: blur(5px);
  transform: translateX(-150px);
  opacity: 0;
  pointer-events: none;
`;