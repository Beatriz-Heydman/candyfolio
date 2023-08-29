import { Typography } from "../typography";
import { StyledFooter } from "./styles";

export function Footer() {
  return (
    <StyledFooter>
      <div className="waves_img">
        <Typography
          fontWheight="500"
          color="var(--pink-100)"
          style={{
            padding: "2rem",
          }}
        >
          &copy; By Beatriz Heydman
        </Typography>
      </div>
    </StyledFooter>
  );
}
