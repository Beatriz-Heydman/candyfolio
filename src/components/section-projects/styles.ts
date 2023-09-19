//Libs
import { styled } from "styled-components";

export const ClickHere = styled.a`
  color: var(--pink-800);
  text-decoration: none;
  font-weight: bold;
  position: relative;
  white-space: nowrap;

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
`;

export const StyledSectionProjects = styled.section`
  width: 100%;
  height: 100%;
  margin-bottom: 3rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;

  .card_projects_container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
  }

  .balls_tech_container {
    background-color: red;
    height: 0px;
    transform: translateY(-160px);
  }

  @media (max-width: 450px) {
    .card_projects_container {
      align-items: center;
      justify-content: center;
      gap: 4.5rem;
      margin-bottom: 2rem;
    }

    .balls_tech_container {
      flex-direction: row;
      width: 0;
      transform: translate(-320px, 175px);
      margin-top: 1.5rem;
    }
  }

  @media (max-width: 750px) {
    .card_projects_container {
      align-items: center;
      justify-content: flex-start;
    }
  }
`;
