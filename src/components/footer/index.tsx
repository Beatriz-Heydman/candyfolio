//Styles
import { StyledFooter } from "./styles";

//Components
import { Typography } from "../typography";

export function Footer() {
  return (
    <StyledFooter>
      <div className="waves_img">
        <Typography className="copyright_footer">
          &copy; By Beatriz Heydman
        </Typography>
      </div>
    </StyledFooter>
  );
}
