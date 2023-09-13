//Components
import { ArticleAboutMe } from "./components/article-about-me";
import { Flex } from "./components/flex";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { SectionProjects } from "./components/section-projects";
import { SectionTechLanguage } from "./components/section-tech-language";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

function App() {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <Flex
        direction="column"
        justifyContent="flex-start"
        style={{ height: "100vh" }}
      >
        <Header />

        <Main />
      </Flex>

      <ArticleAboutMe />

      <Flex
        direction="column"
        style={{
          width: "100%",
        }}
      >
        <SectionProjects />

        <div className="section_division"></div>

        <SectionTechLanguage />
      </Flex>

      <Footer />
    </StyleSheetManager>
  );
}

export default App;
