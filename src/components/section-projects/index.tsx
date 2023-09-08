//Styles
import { StyledSectionProjects } from "./styles";

//Components
import { BallLanguageTech } from "../ball-language-tech";
import { CardProject } from "../card-project";
import { Flex } from "../flex";
import { Typography } from "../typography";

export function SectionProjects() {
  const projects = [
    {
      id: 1,
      name: "Marvel HQ's",
      description:
        "Site de listagem de HQ's, com comunicação com API's da marvel.",
      image: "/public/assets/images/marvel-project.png",
      github: "https://github.com/Beatriz-Heydman/marvel-project?search=1",
      deploy: "https://marvel-project-psi.vercel.app/",
    },
    {
      id: 2,
      name: "Anime",
      description:
        "Site de listagem de Animes, com comunicação com uma API's de anime.",
      image: "/public/assets/images/anime-project.png",
      github: "https://github.com/Beatriz-Heydman/anime-project?search=1",
      deploy: "https://anime-project-sand.vercel.app/",
    },
    {
      id: 3,
      name: "Buscador de CEP",
      description: "Site de busca de CEP, com comunicação com API's Viacep.",
      image: "/public/assets/images/zip-search-project.png",
      github: "https://github.com/Beatriz-Heydman/zip-search?search=1",
      deploy: "https://zip-search.vercel.app/",
    },
    {
      id: 4,
      name: "Lista de tarefas",
      description: "",
      image: "/public/assets/images/to-do-list-project.png",
      github: "https://github.com/Beatriz-Heydman/new-to-do-list?search=1",
      deploy: "https://new-to-do-list-pink.vercel.app/",
    },
    {
      id: 5,
      name: "Gestão de despesas",
      description: "",
      image: "/public/assets/images/expense-management-project.png",
      github: "https://github.com/Beatriz-Heydman/expense-management?search=1",
      deploy: "https://github.com/Beatriz-Heydman/expense-management#readme",
    },
    {
      id: 6,
      name: "Formulário de usuários",
      description: "",
      image: "/public/assets/images/crud-users-form-project.png",
      github: "https://github.com/Beatriz-Heydman/crud-users-form?search=1",
      deploy: "https://github.com/Beatriz-Heydman/crud-users-form#readme",
    },
  ];

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
        {projects.map((project, index) => (
          <Flex gap="1rem">
            <CardProject
              key={index}
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
        ))}
      </Flex>
    </StyledSectionProjects>
  );
}
