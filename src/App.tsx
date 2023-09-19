//Libs
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

//Components
import { ArticleAboutMe } from "./components/article-about-me";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { SectionProjects } from "./components/section-projects";
import { SectionTechLanguage } from "./components/section-tech-language";

function App() {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <div className="main_content">
        <Header />

        <Main />
      </div>

      <ArticleAboutMe />

      <div className="sections_content">
        <SectionProjects />

        <div className="section_division" />

        <SectionTechLanguage />
      </div>

      <Footer />
    </StyleSheetManager>
  );
}

export default App;
