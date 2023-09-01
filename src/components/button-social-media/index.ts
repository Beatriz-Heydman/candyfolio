//Libs
import { styled } from "styled-components";

export const ButtonSocialMedia = styled.button`
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  border: 1px solid #efefef;
  background-color: #eaeaea;
  box-shadow: -2px -2px 3px 1px rgba(255, 255, 255, 0.655),
    -1px 2px 2px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all cubic-bezier(0.25, 1.5, 0.25, 1) 0.5s;

  &:hover {
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
      inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
      -0.5px -0.5px 0px rgba(255, 255, 255, 1),
      0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
      0px 12px 10px -10px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transform: translateY(0.2em);
  }
`;
