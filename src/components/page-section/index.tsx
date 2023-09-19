//Components
import { Typography } from "../typography";
import { Flex } from "../flex";

//Styles
import { PageSectionContainer } from "./styles";

//Types
import { PageSectionProps } from "./types";

export function PageSection({
  children,
  sectionName,
  subTitle,
  ...rest
}: PageSectionProps) {
  return (
    <PageSectionContainer {...rest}>
      <Flex
        alignItems="flex-start"
        justifyContent="flex-start"
        direction="column"
        gap={"1rem"}
      >
        <Typography size="2.5rem" fontWheight="600" color="var(--pink-600)">
          {sectionName}
        </Typography>
        {subTitle}
      </Flex>

      {children}
    </PageSectionContainer>
  );
}
