//Styles
import { useState } from "react";
import { StyledMenuHamburguer } from "./styles";

export function MenuHamburguer() {
  const [isOpenSideBar, setIsOpenSidebar] = useState(false);

  const [subtitleIsShowing, setSubtitleIsShowing] = useState(false);

  return (
    <StyledMenuHamburguer
      className={isOpenSideBar ? "sidebar" : ""}
      onClick={() => {
        setIsOpenSidebar(!isOpenSideBar);
        setSubtitleIsShowing(!subtitleIsShowing);
      }}
    >
      <div className="menu_hamburguer_bar"></div>
      <div className="menu_hamburguer_bar"></div>
      <div className="menu_hamburguer_bar"></div>

      {subtitleIsShowing && (
        <div className={subtitleIsShowing ? "sidebar_subtitle_container" : ""}>
          <a className="sidebar_subtitle" href="#main_page">
            Página inicial
          </a>
          <a className="sidebar_subtitle" href="#article_about_me">
            Sobre mim
          </a>
          <a className="sidebar_subtitle" href="#section_projects">
            Projetos
          </a>
          <a className="sidebar_subtitle" href="#section_tech_language">
            Tecnologias
          </a>
        </div>
      )}
    </StyledMenuHamburguer>
  );
}
