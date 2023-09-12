//Styles
import { StyledCardTechDescription } from "./styles";

//Types
import { CardTechDesciptionProps } from "./types";

export function CardTechDescription({
  name,
  description,
  color,
  ...divProps
}: CardTechDesciptionProps) {
  return (
    <StyledCardTechDescription {...divProps} textColor={color}>
      <span className="name card">{name}</span>
      <span className="description card ">{description}</span>
    </StyledCardTechDescription>
  );
}
