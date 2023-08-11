//Libs
import { styled } from "styled-components";

export const ProjectButton = styled.button`
  width: 50px;
  height: 25px;
  border-radius: 1rem;
  border: 2px solid var(--pink-400);
  background-color: var(--pink-300);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  color: var(--pink-500);
  transition: all ease 0.2s;

  &::before {
    content: "";
    width: 0;
    height: 25px;
    position: absolute;
    left: 0;
    background-color: var(--pink-400);
    transition: 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: #fff;

    &::before {
      width: 100%;
    }
  }
`;
