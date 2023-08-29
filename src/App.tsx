//Components
import { ArticleAboutMe } from "./components/article-about-me";
import { Flex } from "./components/flex";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { SectionProjects } from "./components/section-projects";
import { SectionTechLanguage } from "./components/section-tech-language";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
