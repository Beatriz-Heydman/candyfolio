//Libs
import { useEffect, useRef } from "react";

//Components
import { Typography } from "../typography";
import { Flex } from "../flex";
import { MenuHamburguer } from "../menu-hamburguer";

//Styles
import { StyledHeader } from "./styles";

const MOBILE_BREAKPOINT = 500;

const siteStartName = "< Candyfolio";

const siteEndName = "/>";

export function Header() {
  const siteNameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (!siteNameRef.current) return;

      const siteName = siteNameRef.current.innerText;

      const isMobileDevice = window.innerWidth < MOBILE_BREAKPOINT;

      if (isMobileDevice) {
        siteNameRef.current.innerText = siteName.replace("desktop", "mobile");
      } else {
        siteNameRef.current.innerText = siteName.replace("mobile", "desktop");
      }
    });
  }, []);

  return (
    <StyledHeader>
      <div className="candy_frosting_img" />

      <Flex className="site_name">
        <Flex gap="0.5rem">
          <Typography
            className="styled_site_name"
            size="1.5rem"
            fontWheight="700"
            fontFamily="Kodchasan"
            color="var(--pink-600)"
          >
            {siteStartName}
          </Typography>

          <Typography
            className="styled_site_name"
            ref={siteNameRef}
            size="1.4rem"
            fontWheight="700"
            fontFamily="Kodchasan"
            color="var(--pink-100)"
          >
            device="desktop"
          </Typography>

          <Typography
            className="styled_site_name"
            size="1.7rem"
            fontWheight="700"
            fontFamily="Kodchasan"
            color="var(--pink-600)"
          >
            {siteEndName}
          </Typography>
        </Flex>
      </Flex>
      <MenuHamburguer />
    </StyledHeader>
  );
}
