//Libs
import { styled } from "styled-components";

export const ProjectButton = styled.button`
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

  &:hover::before {
    width: 100%;
  }

  .project_button_icon {
    color: var(--pink-500);
    padding: 0.15rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all ease 0.2s;

    &:hover {
      color: #fff;
    }
  }
`;
