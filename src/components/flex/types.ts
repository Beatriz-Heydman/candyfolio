export type FlexProps = {
  gap?: string;
  wrap?: "nowrap" | "wrap";
  direction?: "column" | "row";
  alignItems?: "center" | "flex-start" | "flex-end";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
};
