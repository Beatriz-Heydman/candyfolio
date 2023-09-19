//Components
import { Flex } from "../flex";
import { MenuHamburguer } from "../menu-hamburguer";

//Styles
import { StyledHeader } from "./styles";

export function Header() {
  const headerTitle = "<Candyfólio />";

  return (
    <StyledHeader>
      <div className="candy_frosting_img" />
      <Flex>
        <span className="header_title">{headerTitle}</span>
      </Flex>
      <MenuHamburguer />
    </StyledHeader>
  );
}
