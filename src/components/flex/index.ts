//Libs
import styled from "styled-components";

//Types
import { FlexProps } from "./types";

export const Flex = styled.div<FlexProps>`
  display: flex;
  gap: ${({ gap = "0" }) => gap};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: ${({ justifyContent = "center" }) => justifyContent};
  align-items: ${({ alignItems = "center" }) => alignItems};
`;
