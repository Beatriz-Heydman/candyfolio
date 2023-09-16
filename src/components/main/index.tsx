//Libs
import { FaGooglePlusG } from "react-icons/fa";
import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";

//Components
import { ButtonSocialMedia } from "../button-social-media";
import { Flex } from "../flex";
import { Typography } from "../typography";

//Styles
import { StyledMain } from "./styles";

export function Main() {
  function moveDonut(event: MouseEvent) {
    const donutBitten = document.getElementById("donut_bitten");

    const positionX = event.clientX;
    const positionY = event.clientY;

    if (donutBitten) {
      donutBitten.style.left = positionX + "px";
      donutBitten.style.top = positionY + 32 + "px";
    }
  }

  function followMouse() {
    const donutBitten = document.getElementById("donut_bitten");

    if (donutBitten?.classList.contains("is_moving")) {
      donutBitten?.classList.remove("is_moving");

      window.removeEventListener("mousemove", moveDonut);
    } else {
      donutBitten?.classList.add("is_moving");
      window.addEventListener("mousemove", moveDonut);
    }
  }

  return (
    <StyledMain id="main_page">
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

        <div className="button_social_media">
          <ButtonSocialMedia>
            <a
              className="button linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/beatriz-heydman/"
            >
              <TiSocialLinkedin size="1.5rem" />
            </a>
          </ButtonSocialMedia>

          <ButtonSocialMedia>
            <a
              className="button plus_g"
              target="_blank"
              href="mailto:biaheydman@gmail.com"
            >
              <FaGooglePlusG size="1.5rem" />
            </a>
          </ButtonSocialMedia>

          <ButtonSocialMedia>
            <a
              className="button github"
              target="_blank"
              href="https://github.com/Beatriz-Heydman"
            >
              <TiSocialGithub size="2rem" />
            </a>
          </ButtonSocialMedia>
        </div>
      </Flex>
      <div className="donut_logo_main" onClick={followMouse}>
        <img id="donut_bitten" src="/assets/images/donut-logo.png" />
      </div>
    </StyledMain>
  );
}
