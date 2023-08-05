//Libs
import { styled } from "styled-components";

//Types
import { TypographyProps } from "./types";

export const Typography = styled.span<TypographyProps>`
  font-size: ${({ size = "1rem" }) => size};
  font-weight: ${({ fontWheight = "400" }) => fontWheight};
  color: ${({ color = "#000000" }) => color};
  font-family: ${({ fontFamily = "Quicksand" }) => fontFamily};
`;
