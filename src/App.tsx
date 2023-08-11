//Components
import { ArticleAboutMe } from "./components/article-about-me";
import { Flex } from "./components/flex";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { SectionProjects } from "./components/section-projects";

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
        justifyContent="center"
        style={{
          width: "100%",
        }}
      >
        <SectionProjects />
      </Flex>
    </>
  );
}

export default App;
