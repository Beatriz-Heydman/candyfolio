//Styles
import { StyledSectionTechLanguage } from "./styles";

//Components
import { CardTechLanguage } from "../card-tech";
import { CardTechDescription } from "../card-tech-description";
import { Flex } from "../flex";
import { Typography } from "../typography";

//Constants
import { CARDS_LANGUAGES_TECH } from "../../constants/card-languages-tech";

export function SectionTechLanguage() {
  return (
    <StyledSectionTechLanguage id="section_tech_language">
      <Typography size="2.5rem" fontWheight="600" color="var(--pink-600)">
        Tecnologias
      </Typography>
      <Flex
        gap="2rem"
        justifyContent="space-between"
        alignItems="flex-start"
        style={{ width: "100%" }}
      >
        <Flex direction="column" gap="1rem">
          {CARDS_LANGUAGES_TECH.map((CARD_LANGUAGE_TECH, id) => (
            <CardTechLanguage
              key={id}
              name={CARD_LANGUAGE_TECH.name}
              icon={CARD_LANGUAGE_TECH.icon}
              skills={CARD_LANGUAGE_TECH.skills}
              backgroundColor={CARD_LANGUAGE_TECH.backgroundColor}
              borderColor={CARD_LANGUAGE_TECH.borderColor}
              color={CARD_LANGUAGE_TECH.color}
            />
          ))}
        </Flex>
        <CardTechDescription />
      </Flex>
    </StyledSectionTechLanguage>
  );
}
