//Libs
import { styled } from "styled-components";

export const StyledMenuHamburguer = styled.button`
  width: 60px;
  height: 60px;
  background-color: var(--pink-600);
  border: 2px solid var(--pink-800);
  top: 1rem;
  right: 1rem;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25),
    0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: end;
  padding: 0.9rem;
  flex-direction: column;
  gap: 0.2rem;
  transition: all ease 0.2s;
  position: fixed;
  z-index: 9999;

  &.sidebar {
    height: 100vh;
    width: 350px;
    background-color: var(--pink-400);
    border-radius: 0;
    cursor: default;
    top: 0;
    right: 0;
    box-shadow: none;
    border: none;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    position: fixed;
    padding-top: 2rem;
    padding-right: 2rem;
    z-index: 9999;

    .menu_hamburguer_bar {
      &:nth-child(1) {
        transform: translateY(11px) rotate(-45deg);
      }

      &:nth-child(2) {
        transform: scale(0);
      }

      &:nth-child(3) {
        transform: translateY(-11px) rotate(45deg);
      }
    }
  }

  .menu_hamburguer_bar {
    background-color: var(--pink-100);
    border-radius: 1rem;
    min-width: 30px;
    height: 7px;
    border: 1px solid var(--pink-800);
    cursor: pointer;
    display: flex;
    transition: all ease 0.2s;
  }

  .sidebar_subtitle_container {
    width: 100%;
    font-weight: 500;
    font-size: 1.25rem;
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    flex-direction: column;
    left: 0;
    padding: 2rem;
  }

  .sidebar_subtitle {
    color: var(--pink-100);
    transition: all ease 0.2s;
    cursor: pointer;
    text-decoration: none;

    &:visited {
      color: var(--pink-100);
    }

    &:hover {
      width: 100%;
      color: var(--pink-800);
      background-color: var(--pink-100);
      padding: 0.5rem 1.5rem;
      display: flex;
      border-radius: 2rem;
      border: 2px solid var(--pink-800);
    }
  }
`;
