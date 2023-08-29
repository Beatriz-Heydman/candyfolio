import { Typography } from "../typography";
import { StyledFooter } from "./styles";

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
