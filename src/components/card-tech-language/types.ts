//Libs
import { ReactNode } from "react";

export type CardTechLanguageProps = {
  backgroundColor: string;
  borderColor: string;
  color: string;
};

export type CardTechLanguages = {
  name: string;
  backgroundColor: string;
  borderColor: string;
  color: string;
  icon: ReactNode;
  skills: string[];
  onMouseOver: () => void;
};
