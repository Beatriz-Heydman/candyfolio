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
  }

  .button_social_media {
    display: flex;
    gap: 3rem;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .linkedin:hover {
    color: #567ca5;
  }

  .whatsapp:hover {
    color: #56a56b;
  }

  .plus_g:hover {
    color: #f74444;
  }

  .github:hover {
    color: #5d5d5d;
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

    .donut_logo_main {
      min-width: 221px;
      height: 224px;
    }
  }

  @media (max-width: 700px) {
    .button_social_media {
      gap: 1.5rem;
    }
  }
`;
