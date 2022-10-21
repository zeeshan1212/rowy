import { colord } from "colord";
import { styled } from "@mui/material";

export const StyledCell = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "--cell-padding": theme.spacing(10 / 8),
  padding: "0 var(--cell-padding)",

  overflow: "visible",
  contain: "none",
  position: "relative",

  lineHeight: "calc(var(--row-height) - 1px)",

  backgroundColor: theme.palette.background.paper,

  border: `1px solid ${theme.palette.divider}`,
  borderTop: "none",
  "& + &": { borderLeft: "none" },

  "[role='row']:hover &": {
    backgroundColor: colord(theme.palette.background.paper)
      .mix(theme.palette.action.hover, theme.palette.action.hoverOpacity)
      .alpha(1)
      .toHslString(),
  },
}));
StyledCell.displayName = "StyledCell";