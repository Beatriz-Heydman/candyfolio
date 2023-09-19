//Libs
import { styled } from "styled-components";

export const StyledHeader = styled.div`
  position: relative;
  height: 40vh;
  width: 100%;

  .candy_frosting_img {
    width: 100%;
    height: 100%;
    background: url(/assets/images/candy-frosting-header.svg);
    background-size: cover;
    background-position: bottom;
    margin-top: -1px;
    filter: drop-shadow(2px 2px 4px #000);
    pointer-events: none;
  }

  .header_title {
    position: absolute;
    top: 1.2rem;
    left: 1rem;
    font-weight: 600;
    color: var(--pink-400);
    -webkit-text-stroke: 1px var(--pink-800);
    font-size: 1.5rem;
    font-family: "Kodchasan";
  }

  @media (max-width: 550px) {
    height: 25dvh;

    .header_title {
      font-size: 1rem;
    }
  }
`;
