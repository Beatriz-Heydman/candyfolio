//Libs
import { useState } from "react";

//Components
import { CardTechLanguage } from "../card-tech-language";
import { CardTechDescription } from "../card-tech-description";
import { Flex } from "../flex";
import { Typography } from "../typography";

//Styles
import { StyledSectionTechLanguage } from "./styles";

//Constants
import { CARDS_LANGUAGES_TECH } from "../../constants/card-languages-tech";

export function SectionTechLanguage() {
  const [currentName, setCurrentName] = useState(CARDS_LANGUAGES_TECH[0].name);
  const [currentDescription, setCurrentDescription] = useState(
    CARDS_LANGUAGES_TECH[0].description
  );
  const [currentColor, setCurrentColor] = useState(
    CARDS_LANGUAGES_TECH[0].color
  );

  return (
    <StyledSectionTechLanguage id="section_tech_language">
      <Typography size="2.5rem" fontWheight="600" color="var(--pink-600)">
        Tecnologias
      </Typography>

      <div className="card_language_tech_container">
        <Flex style={{ width: "100%" }} direction="column" gap="1.25rem">
          {CARDS_LANGUAGES_TECH.map((CARD_LANGUAGE_TECH, id) => (
            <CardTechLanguage
              key={id}
              name={CARD_LANGUAGE_TECH.name}
              icon={CARD_LANGUAGE_TECH.icon}
              skills={CARD_LANGUAGE_TECH.skills}
              backgroundColor={CARD_LANGUAGE_TECH.backgroundColor}
              borderColor={CARD_LANGUAGE_TECH.borderColor}
              color={CARD_LANGUAGE_TECH.color}
              onMouseOver={() => {
                if (currentName !== CARD_LANGUAGE_TECH.name) {
                  const cardTechElement = document.getElementById(
                    "card_tech_description"
                  );

                  if (cardTechElement) {
                    cardTechElement.classList.add("changing_tech");

                    setTimeout(() => {
                      setCurrentName(CARD_LANGUAGE_TECH.name);
                      setCurrentDescription(CARD_LANGUAGE_TECH.description);
                      setCurrentColor(CARD_LANGUAGE_TECH.color);
                      cardTechElement.classList.remove("changing_tech");
                    }, 200);
                  }
                }
              }}
            />
          ))}
        </Flex>

        <CardTechDescription
          id="card_tech_description"
          name={currentName}
          description={currentDescription}
          color={currentColor}
        />
      </div>
    </StyledSectionTechLanguage>
  );
}
