import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  .waves_img {
    width: 100%;
    height: 200px;
    background: url(/assets/images/waves_footer.svg);
    background-size: cover;
    margin-top: -1px;
    overflow-x: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .copyright_footer {
      padding: 2rem;
      font-weight: 500;
      color: var(--pink-100);
    }

    @media (max-width: 500px) {
      height: 100px;
      background-size: cover;
      background-repeat: no-repeat;

      .copyright_footer {
        padding: 0.5rem;
        font-size: 0.7rem;
      }
    }
  }
`;
