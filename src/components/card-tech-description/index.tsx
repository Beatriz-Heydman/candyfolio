//Styles
import { StyledCardTechDescription } from "./styles";

//Components
import { Typography } from "../typography";

export function CardTechDescription() {
  return (
    <StyledCardTechDescription>
      <Typography
        fontWheight="600"
        color="var(--orange-300)"
        size="1.5rem"
      ></Typography>
      <Typography color="var(--orange-300)"></Typography>
    </StyledCardTechDescription>
  );
}
