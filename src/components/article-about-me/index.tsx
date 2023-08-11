//Styles
import { StyledArticleAboutMe } from "./styles";

//Components
import { ButtonCV } from "../button-cv";
import { Flex } from "../flex";
import { Typography } from "../typography";

export function ArticleAboutMe() {
  return (
    <StyledArticleAboutMe>
      <Flex direction="column" gap="1rem">
        <div className="icon_woman_container">
          <div className="icon_woman" />
        </div>

        <ButtonCV className="download_cv">
          <Typography fontWheight="600" color="var(--pink-500)">
            Baixar CV
          </Typography>
        </ButtonCV>
      </Flex>

      <div className="description_about_me_container">
        <Typography size="2rem" color="var(--pink-600)" fontWheight="600">
          Sobre mim
        </Typography>
        <p className="paragraph_about_me">
          Meu nome é Beatriz Heydman, <strong>desenvolvedora Front-End</strong>{" "}
          com a ambição de me tornar <strong>Full Stack</strong>. Minha paixão é
          criar interfaces web envolventes e funcionais. Atualmente, estou
          expandindo meus conhecimentos em tecnologias{" "}
          <strong>Front-End</strong>. Estou empolgada para compartilhar minha
          jornada em busca de me tornar uma desenvolvedora completa.
        </p>
      </div>
    </StyledArticleAboutMe>
  );
}
