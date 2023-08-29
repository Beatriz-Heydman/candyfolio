import { Typography } from "../typography";
import { StyledCardTechLanguage } from "./styles";
// import {
// DiJavascript1,
//   DiReact,
// DiHtml5,
//   DiCss3Full,
// } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";

export function CardTechLanguage() {
  const skills = [
    "Habilidade 1",
    "Habilidade 2",
    "Habilidade 3",
    "Habilidade 4",
    "Habilidade 5",
  ];

  return (
    <StyledCardTechLanguage
      backgroundColor="var(--orange-100)"
      borderColor="var(--orange-200)"
    >
      <div className="card_language_tech">
        <div className="ball_language_icon">
          <DiHtml5 />
        </div>
        <Typography color="var(--orange-200)" fontWheight="bolder">
          HTML
        </Typography>
      </div>

      <div className="card_skills">
        <div className="skills_content">
          <Typography color="var(--orange-300)" fontWheight="600" size="1.2rem">
            Habilidades
          </Typography>
          <ul style={{ color: "var(--orange-300)" }}>
            {skills.map((skill, index) => (
              <li key={index} style={{ transitionDelay: index * 100 + "ms" }}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StyledCardTechLanguage>
  );
}

{
  /* <BiLogoTypescript />
  <DiCss3Full />
  <DiJavascript1 />
  <DiReact /> */
}
