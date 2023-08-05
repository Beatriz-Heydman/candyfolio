import { styled } from "styled-components";

export const StyledSectionProjects = styled.section`
  width: 90%;
  height: 100%;
  padding: 2.5rem;

  .click_here {
    color: var(--pink-800);
    text-decoration: none;
    font-weight: bold;
    position: relative;

    &:visited {
      color: var(--pink-600);
    }

    &:focus,
    &:hover {
      color: var(--pink-500);
    }

    &:focus:after,
    &:hover:after {
      width: 100%;
      right: 0%;
    }

    &:after {
      content: "";
      pointer-events: none;
      bottom: -2px;
      left: 0;
      right: 100%;
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: var(--pink-500);
      transition-timing-function: cubic-bezier(0.35, 0.15, 0.35, 1);
      transition-duration: 400ms;
      transition-property: width, left;
    }
  }
`;
