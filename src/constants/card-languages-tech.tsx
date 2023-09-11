import { DiJavascript1, DiReact, DiCss3Full } from "react-icons/di";
import { BiLogoHtml5 } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";

export const CARDS_LANGUAGES_TECH = [
  {
    id: 1,
    name: "HTML",
    color: "var(--orange-300)",
    backgroundColor: "#FFE5C7",
    borderColor: "var(--orange-200)",
    icon: <BiLogoHtml5 />,
    skills: ["HTML 5", "Semântica"],
  },
  {
    id: 2,
    name: "CSS",
    color: "var(--blue-300)",
    backgroundColor: "#B7DDFF",
    borderColor: "var(--blue-250)",
    icon: <DiCss3Full />,
    skills: ["Seletores", "Flex box", "Animações", "Media Queries"],
  },
  {
    id: 3,
    name: "Javascript",
    color: "var(--yellow-300)",
    backgroundColor: "#FFF5BF",
    borderColor: "var(--yellow-200)",
    icon: <DiJavascript1 />,
    skills: [
      "Loopings",
      "Requisições API",
      "Axios",
      "DOM",
      "Javascript assincrono",
    ],
  },
  {
    id: 4,
    name: "Typescript",
    color: "var(--blue-300)",
    backgroundColor: "#B6EEFF",
    borderColor: "var(--blue-200)",
    icon: <TbBrandTypescript />,
    skills: ["Literal Types", "Union Types", "Primitive Types"],
  },
  {
    id: 5,
    name: "React",
    color: "var(--sea-green-300)",
    backgroundColor: "#B6FFF6",
    borderColor: "var(--sea-green-200)",
    icon: <DiReact />,
    skills: [
      "Hooks",
      "Components",
      "Props",
      "Styled Components",
      "Context API",
    ],
  },
];
