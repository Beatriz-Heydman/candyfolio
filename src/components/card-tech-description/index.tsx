//Styles
import { StyledCardTechDescription } from "./styles";

//Types
import { CardTechDesciptionProps } from "./types";

export function CardTechDescription({
  name,
  description,
  color,
}: CardTechDesciptionProps) {
  return (
    <StyledCardTechDescription color={color}>
      <span className="name card">{name}</span>
      <span className="description card ">{description}</span>
    </StyledCardTechDescription>
  );
}
