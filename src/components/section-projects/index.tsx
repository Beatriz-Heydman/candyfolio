//Styles
import { StyledSectionProjects } from "./styles";

//Components
import { BallLanguageTech } from "../ball-language-tech";
import { CardProject } from "../card-project";
import { Flex } from "../flex";
import { Typography } from "../typography";

//Constants
import { PROJECTS } from "../../constants/projects";
import { BALLS_LANGUAGES_TECH } from "../../constants/ball-languages-tech";

export function SectionProjects() {
  console.log(BALLS_LANGUAGES_TECH);

  return (
    <StyledSectionProjects id="section_projects">
      <Flex gap="1.5rem" direction="column" alignItems="flex-start">
        <Typography size="2.5rem" fontWheight="600" color="var(--pink-600)">
          Projetos
        </Typography>

        <Typography color="var(--pink-800)">
          Aqui estão alguns dos meus projetos, para ver todos {""}
          <a
            target="_blank"
            className="click_here"
            href="https://github.com/Beatriz-Heydman?tab=repositories"
          >
            clique aqui!
          </a>
        </Typography>
      </Flex>

      <Flex
        wrap="wrap"
        gap="3rem"
        alignItems="flex-start"
        style={{ width: "100%", height: "100%" }}
      >
        {PROJECTS.map((project, index) => (
          <Flex gap="1rem">
            <CardProject
              key={`project-${index}`}
              name={project.name}
              description={project.description}
              image={project.image}
              github={project.github}
              deploy={project.deploy}
            />
            <Flex
              direction="column"
              justifyContent="space-between"
              gap="1rem"
              className="balls_tech_container"
            >
              {BALLS_LANGUAGES_TECH.map((languageTech, index) => (
                <BallLanguageTech
                  key={index}
                  className="ball_tech"
                  backgroundColor={languageTech.backgroundColor}
                  border={languageTech.border}
                  transitionDelay={languageTech.transitionDelay}
                >
                  <Typography
                    fontWheight="600"
                    size="0.85rem"
                    color={languageTech.color}
                  >
                    {languageTech.languageTech}
                  </Typography>
                </BallLanguageTech>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </StyledSectionProjects>
  );
}
