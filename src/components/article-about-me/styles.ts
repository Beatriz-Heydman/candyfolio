//Libs
import { styled } from "styled-components";

export const StyledArticleAboutMe = styled.article`
  padding: 2rem;
  padding-inline: 10%;
  gap: 2rem;
  background-color: var(--pink-200);
  border-top: 3px solid var(--pink-500);
  border-bottom: 3px solid var(--pink-500);
  display: flex;
  justify-content: space-between;

  .icon_woman_container {
    width: 150px;
    height: 150px;
    background-color: var(--pink-300);
    border-radius: 50%;
    border: 3px solid var(--pink-500);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon_woman {
    width: 80px;
    height: 80px;
    background: url(/assets/images/icon-woman.png);
    background-size: cover;
  }

  .description_about_me_container {
    max-width: 850px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  .paragraph_about_me {
    font-size: 1.1rem;
    color: var(--pink-800);
    line-height: 2rem;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 3rem;

    .description_about_me_container {
      align-items: center;
      justify-content: center;
    }
  }
`;
