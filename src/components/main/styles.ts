//Libs
import { styled } from "styled-components";

export const StyledMain = styled.main`
  max-width: 80%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .donut_logo_main {
    min-width: 361px;
    height: 346px;
    background: url(/assets/images/donut-logo-main.png);
    background-size: cover;
    cursor: pointer;
    position: relative;
  }

  .button_social_media {
    display: flex;
    gap: 3rem;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .button {
    width: 100%;
    height: 100%;
    color: var(--pink-700);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .linkedin:hover {
    color: #567ca5;
  }

  .plus_g:hover {
    color: #f74444;
  }

  .github:hover {
    color: #5d5d5d;
  }

  #donut_bitten {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    z-index: 9999;
    opacity: 0;
    cursor: default;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all cubic-bezier(0.1, 3.5, 0.8, 2) 0.6s;

    &.is_moving {
      opacity: 1;
      position: fixed;
    }
  }
  @media (max-width: 950px) {
    .donut_logo_main {
      min-width: 301px;
      height: 306px;
    }

    .im {
      font-size: 2.5rem;
    }

    .name {
      font-size: 2rem;
    }

    .dev {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;

    .donut_logo_main {
      min-width: 212px;
      height: 215px;
    }
  }

  @media (max-width: 700px) {
    .button_social_media {
      gap: 1.5rem;
    }
  }
`;
