//Libs
import { ComponentProps } from "react";

export type CardTechDesciptionProps = ComponentProps<"div"> & {
  color: string;
  name: string;
  description: string;
};

export type StyledCardTechDescriptionProps = {
  textColor: string;
};
