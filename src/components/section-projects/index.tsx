import { CardProject } from "../card-project";
import { Flex } from "../flex";
import { Typography } from "../typography";
import { StyledSectionProjects } from "./styles";

export function SectionProjects() {
  return (
    <StyledSectionProjects>
      <Flex gap="1.5rem" direction="column" alignItems="flex-start">
        <Typography size="2.5rem" fontWheight="600" color="var(--pink-600)">
          Projetos
        </Typography>

        <Flex gap="0.4rem">
          <Typography color="var(--pink-800)">
            Aqui estão alguns dos meus projetos, para ver todos
          </Typography>
          <a
            target="_blank"
            className="click_here"
            href="https://github.com/Beatriz-Heydman?tab=repositories"
          >
            clique aqui!
          </a>
        </Flex>
      </Flex>

      <CardProject />
    </StyledSectionProjects>
  );
}
