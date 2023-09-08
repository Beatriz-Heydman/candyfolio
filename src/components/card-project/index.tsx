//Libs
import { FaGlobe, FaGithubAlt } from "react-icons/fa";

//Styles
import { StyledCardProject } from "./styles";

//Components
import { Flex } from "../flex";
import { ProjectButton } from "../project-button/styles";
import { Typography } from "../typography";
import { CardProjectProps } from "./types";

export function CardProject({
  name,
  image,
  description,
  github,
  deploy,
}: CardProjectProps) {
  console.log(image);
  return (
    <StyledCardProject backgroundImage={image}>
      <div className="card_content">
        <Typography color="var(--pink-400)" fontWheight="bolder">
          {name}
        </Typography>

        <Typography color="var(--pink-500)" size="0.9rem">
          {description}
        </Typography>

        <Flex gap="1rem">
          <ProjectButton>
            <a className="project_button_icon" href={deploy} target="_blank">
              <FaGlobe size="1.2rem" />
            </a>
          </ProjectButton>

          <ProjectButton>
            <a className="project_button_icon" href={github} target="_blank">
              <FaGithubAlt size="1.2rem" />
            </a>
          </ProjectButton>
        </Flex>
      </div>
    </StyledCardProject>
  );
}
