//Libs
import { ComponentProps, ReactNode } from "react";

export type PageSectionProps = ComponentProps<"section"> & {
  children: ReactNode;
  sectionName: string;
  subTitle?: ReactNode;
};
