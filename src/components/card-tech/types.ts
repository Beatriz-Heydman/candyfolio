//Libs
import { ReactNode } from "react";

export type CardTechProps = {
  backgroundColor: string;
  borderColor: string;
  color: string;
};

export type CardLanguagesTech = {
  name: string;
  backgroundColor: string;
  borderColor: string;
  color: string;
  icon: ReactNode;
  skills: string[];
};
