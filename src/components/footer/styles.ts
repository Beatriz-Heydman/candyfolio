import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  width: 100vw;

  .waves_img {
    width: 100%;
    min-height: 300px;
    background: url(/assets/images/waves-footer.svg);
    background-size: cover;
    margin-top: 1px;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    /* @media (max-width: 800px) {
      background-size: contain;
    } */
  }
`;
