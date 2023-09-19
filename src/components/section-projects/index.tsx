//Components
import { BallLanguageTech } from "../ball-language-tech";
import { CardProject } from "../card-project";
import { Flex } from "../flex";
import { Typography } from "../typography";
import { PageSection } from "../page-section";

//Styles
import { ClickHere, StyledSectionProjects } from "./styles";

//Constants
import { PROJECTS } from "../../constants/projects";
import { BALLS_LANGUAGES_TECH } from "../../constants/ball-languages-tech";

export function SectionProjects() {
  return (
    <PageSection
      subTitle={
        <Flex gap="1.5rem" direction="column" alignItems="flex-start">
          <Typography color="var(--pink-800)">
            Aqui estão alguns dos meus projetos, para ver todos {""}
            <ClickHere
              target="_blank"
              href="https://github.com/Beatriz-Heydman?tab=repositories"
            >
              clique aqui!
            </ClickHere>
          </Typography>
        </Flex>
      }
      sectionName="Projetos"
    >
      <StyledSectionProjects id="section_projects">
        <div className="card_projects_container">
          {PROJECTS.map((project) => (
            <Flex key={project.name} gap="1rem">
              <CardProject
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
                    key={`ball-tech-${index}-${project.name}`}
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
        </div>
      </StyledSectionProjects>
    </PageSection>
  );
}
