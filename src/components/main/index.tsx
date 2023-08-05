import { ButtonSocialMedia } from "../button-social-media";
import { Flex } from "../flex";
import { Typography } from "../typography";
import { StyledMain } from "./styles";
import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";
import { TbBrandWhatsapp } from "react-icons/tb";
import { FaGooglePlusG } from "react-icons/fa";

export function Main() {
  return (
    <StyledMain>
      <Flex direction="column" gap="1.5rem" alignItems="flex-start">
        <Flex direction="column" alignItems="flex-start">
          <Typography
            className="apresentation im"
            size="3.5rem"
            color="var(--pink-400)"
          >
            Olá, eu sou
          </Typography>

          <Typography
            className="apresentation name"
            size="3rem"
            fontWheight="600"
            color="var(--pink-600)"
          >
            Beatriz Heydman
          </Typography>

          <Typography
            className="apresentation dev"
            size="1.6rem"
            color="var(--pink-800)"
            style={{ padding: "1rem 0 1rem 0" }}
          >
            Desenvolvedora Front end
          </Typography>
        </Flex>

        <Flex
          gap="3rem"
          justifyContent="flex-start"
          wrap="wrap"
          style={{ minWidth: "100%" }}
        >
          <ButtonSocialMedia className="button linkedin">
            <TiSocialLinkedin size="1.5rem" />
          </ButtonSocialMedia>

          <ButtonSocialMedia className="button whatsapp">
            <TbBrandWhatsapp size="1.3rem" />
          </ButtonSocialMedia>

          <ButtonSocialMedia className="button plus_g">
            <FaGooglePlusG size="1.5rem" />
          </ButtonSocialMedia>

          <ButtonSocialMedia className="button github">
            <TiSocialGithub size="2rem" />
          </ButtonSocialMedia>
        </Flex>
      </Flex>

      <div className="donut_logo_main" />
    </StyledMain>
  );
}
