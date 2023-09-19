import { ComponentProps, ReactNode } from "react";
import { PageSectionContainer } from "./styles";
import { Typography } from "../typography";
import { Flex } from "../flex";

type PageSectionProps = ComponentProps<"section"> & {
  children: ReactNode;
  sectionName: string;
  subTitle?: ReactNode;
};

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
