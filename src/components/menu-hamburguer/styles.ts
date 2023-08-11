//Libs
import { styled } from "styled-components";

export const StyledMenuHamburguer = styled.button`
  min-width: 60px;
  min-height: 60px;
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
  justify-content: center;
  align-items: center;
  padding: 0.9rem;
  flex-direction: column;
  gap: 0.2rem;

  .menu_hamburguer_bar,
  .menu_hamburguer_middle_bar {
    background-color: var(--pink-100);
    border-radius: 1rem;
    width: 100%;
    height: 7px;
    border: 1px solid var(--pink-800);
  }

  :not(.menu_hamburguer_bar) .menu_hamburguer_middle_bar {
    width: 60%;
  }

  @media (max-width: 550px) {
    min-width: 50px;
    min-height: 50px;
    padding: 0.7rem;

    .menu_hamburguer_bar,
    .menu_hamburguer_middle_bar {
      height: 6px;
    }
  }
`;
