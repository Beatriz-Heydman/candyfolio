//Libs
import { styled } from "styled-components";

export const StyledHeader = styled.div`
  position: relative;
  height: 40vh;
  width: 100%;

  .site_name {
    top: 1.2rem;
    left: 1rem;
    position: absolute;
    letter-spacing: -0.1rem;
  }

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

  .styled_site_name {
    -webkit-text-stroke: 1px var(--pink-800);
  }

  @media (max-width: 450px) {
    .styled_site_name {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 400px) {
    .styled_site_name {
      font-size: 1rem;
    }
  }
`;
