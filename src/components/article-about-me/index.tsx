//Components
import { ButtonCV } from "../button-cv";
import { Flex } from "../flex";
import { Typography } from "../typography";

//Styles
import { StyledArticleAboutMe } from "./styles";

export function ArticleAboutMe() {
  return (
    <StyledArticleAboutMe id="article_about_me">
      <Flex direction="column" gap="1rem">
        <div className="icon_woman_container">
          <div className="icon_woman" />
        </div>

        <ButtonCV className="download_cv">
          <a
            className="file_cv"
            target="_blank"
            href="/public/assets/images/Beatriz Heydman - CV.pdf"
          >
            Baixar CV
          </a>
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
