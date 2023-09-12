//Components
import { Typography } from "../typography";

//Styles
import { StyledCardTechLanguage } from "./styles";

//Types
import { CardTechLanguages } from "./types";

export function CardTechLanguage({
  name,
  backgroundColor,
  borderColor,
  color,
  icon,
  skills,
  onMouseOver,
}: CardTechLanguages) {
  return (
    <StyledCardTechLanguage
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      color={color}
      onMouseOver={onMouseOver}
    >
      <div className="card_language_tech">
        <div className="ball_language_icon">{icon}</div>
        <Typography fontWheight="bolder" color={color}>
          {name}
        </Typography>
      </div>

      <div className="card_skills">
        <div className="skills_content">
          <Typography color={color} fontWheight="600" size="1.2rem">
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
