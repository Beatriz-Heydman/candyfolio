//Libs
import { FaGlobe, FaGithubAlt } from "react-icons/fa";

//Styles
import { StyledCardProject } from "./styles";

//Components
import { Flex } from "../flex";
import { ProjectButton } from "../project-button";
import { Typography } from "../typography";

export function CardProject() {
  return (
    <StyledCardProject>
      <div className="card_content">
        <Typography color="var(--pink-400)" fontWheight="bolder">
          Marvel HQ's
        </Typography>

        <Typography color="var(--pink-500)" size="0.9rem">
          Site de listagem de HQ’s, com comunicação com API’s da marvel.
        </Typography>

        <Flex gap="1rem">
          <ProjectButton>
            <FaGlobe size="1.2rem" />
          </ProjectButton>

          <ProjectButton>
            <FaGithubAlt size="1.2rem" />
          </ProjectButton>
        </Flex>
      </div>
    </StyledCardProject>
  );
}
