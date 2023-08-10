import { styled } from "styled-components";

export const ProjectButton = styled.button`
  padding: 0.2rem 1rem;
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
    height: 100%;
    position: absolute;
    left: 0;
    background-color: var(--pink-400);
    transition: 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    width: 100%;
  }
`;
