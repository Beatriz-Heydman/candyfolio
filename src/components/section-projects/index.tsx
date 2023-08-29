//Styles
import { StyledSectionProjects } from "./styles";

//Components
import { BallLanguageTech } from "../ball-language-tech";
import { CardProject } from "../card-project";
import { Flex } from "../flex";
import { Typography } from "../typography";

export function SectionProjects() {
  return (
    <StyledSectionProjects>
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
        gap="4rem"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Flex gap="1rem">
          <CardProject />
          <Flex
            direction="column"
            justifyContent="space-between"
            gap="1rem"
            className="balls_tech_container"
          >
            <BallLanguageTech
              className="ball_tech"
              backgroundColor="var(--orange-100)"
              border="2px solid var(--orange-200)"
            >
              <Typography
                fontWheight="600"
                color="var(--orange-300)"
                size="0.85rem"
              >
                HTML
              </Typography>
            </BallLanguageTech>

            <BallLanguageTech
              style={{ transitionDelay: "50ms" }}
              className="ball_tech"
              backgroundColor="var(--blue-150)"
              border="2px solid var(--blue-250)"
            >
              <Typography
                fontWheight="600"
                color="var(--blue-300)"
                size="0.85rem"
              >
                CSS
              </Typography>
            </BallLanguageTech>

            <BallLanguageTech
              style={{ transitionDelay: "100ms" }}
              className="ball_tech"
              backgroundColor="var(--yellow-100)"
              border="2px solid var(--yellow-200)"
            >
              <Typography
                fontWheight="600"
                color="var(--yellow-300)"
                size="0.85rem"
              >
                JS
              </Typography>
            </BallLanguageTech>

            <BallLanguageTech
              style={{ transitionDelay: "150ms" }}
              className="ball_tech"
              backgroundColor="var(--blue-100)"
              border="2px solid var(--blue-200)"
            >
              <Typography
                fontWheight="600"
                color="var(--blue-300)"
                size="0.85rem"
              >
                TS
              </Typography>
            </BallLanguageTech>

            <BallLanguageTech
              style={{ transitionDelay: "200ms" }}
              className="ball_tech"
              backgroundColor="var(--sea-green-100)"
              border="2px solid var(--sea-green-200)"
            >
              <Typography
                fontWheight="600"
                color="var(--sea-green-300)"
                size="0.85rem"
              >
                REACT
              </Typography>
            </BallLanguageTech>
          </Flex>
        </Flex>
      </Flex>
    </StyledSectionProjects>
  );
}
