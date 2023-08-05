import { ButtonCV } from "../button-cv";
import { Flex } from "../flex";
import { Typography } from "../typography";
import { StyledArticleAboutMe } from "./styles";

export function ArticleAboutMe() {
  return (
    <StyledArticleAboutMe>
      <Flex
        direction="column"
        gap="1rem"
        // style={{
        //   width: "40%",
        // }}
      >
        <div className="icon_woman_container">
          <div className="icon_woman" />
        </div>

        <ButtonCV className="download_cv">
          <Typography fontWheight="600" color="var(--pink-500)">
            Baixar CV
          </Typography>
        </ButtonCV>
      </Flex>

      <Flex
        direction="column"
        alignItems="flex-start"
        gap="2rem"
        style={{
          maxWidth: "850px",
        }}
      >
        <Typography size="2rem" color="var(--pink-600)" fontWheight="600">
          Sobre mim
        </Typography>
        <p className="paragraph_about_me">
          Meu nome é Beatriz Heydman, <strong>desenvolvedora Front-End</strong>{" "}
          com a ambição de me tornar <strong>Full Stack</strong>. Minha paixão é
          criar interfaces web envolventes e funcionais. Atualmente, estou
          expandindo meus conhecimentos em tecnologias front-end. Estou
          empolgada para compartilhar minha jornada em busca de me tornar uma
          desenvolvedora completa.
        </p>
      </Flex>
    </StyledArticleAboutMe>
  );
}
