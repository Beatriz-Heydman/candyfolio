//Components
import { Typography } from "../typography";

//Styles
import { StyledFooter } from "./styles";

export function Footer() {
  return (
    <StyledFooter>
      <div className="waves_img">
        <Typography className="copyright_footer">
          &copy; Developed by Beatriz Heydman
        </Typography>
      </div>
    </StyledFooter>
  );
}
