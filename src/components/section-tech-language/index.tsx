import { CardTechLanguage } from "../card-tech";
import { CardTechDescription } from "../card-tech-description";
import { Flex } from "../flex";
import { Typography } from "../typography";
import { StyledSectionTechLanguage } from "./styles";

export function SectionTechLanguage() {
  const languagesTech = [
    {
      id: 1,
      name: "HTML",
      color: "var(--orange-300)",
      background: "var(--orange-100)",
      borderColor: "var(--orange-200)",
      icon: <div> Icon 1 </div>,
      skills: ["HTML 5", "Semântica"],
    },
    {
      id: 2,
      name: "CSS",
      color: "var(--blue-300)",
      background: "var(--blue-150)",
      borderColor: "var(--blue-250)",
      icon: <div> Icon 2 </div>,
      skills: ["Seletores", "Flex box", "Animações", "Media Queries"],
    },
    {
      id: 3,
      name: "Javascript",
      color: "var(--yellow-300)",
      background: "var(--yellow-100)",
      borderColor: "var(--yellow-200)",
      icon: <div> Icon 2 </div>,
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
      background: "var(--blue-100)",
      borderColor: "var(--blue-200)",
      icon: <div> Icon 2 </div>,
      skills: ["Literal Types", "Union Types", "Primitive Types"],
    },
    {
      id: 5,
      name: "React",
      color: "var(--sea-green-300)",
      background: "var(--sea-green-100)",
      borderColor: "var(--sea-green-200)",
      icon: <div> Icon 2 </div>,
      skills: [
        "Hooks",
        "Components",
        "Props",
        "Styled Components",
        "Context API",
      ],
    },
  ];
  console.log(languagesTech);

  return (
    <StyledSectionTechLanguage>
      <Typography size="2.5rem" fontWheight="600" color="var(--pink-600)">
        Tecnologias
      </Typography>
      <Flex
        gap="2rem"
        justifyContent="space-between"
        alignItems="flex-start"
        style={{ width: "100%" }}
      >
        <Flex direction="column" gap="1rem">
          <CardTechLanguage />
          <CardTechLanguage />
          <CardTechLanguage />
        </Flex>

        <CardTechDescription />
      </Flex>
    </StyledSectionTechLanguage>
  );
}

{
  /* <BiLogoTypescript />
<DiCss3Full />
<DiJavascript1 />
<DiReact /> */
}
