import { Grid, Typography, useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { IPage } from "../types";
import { useContext } from "react";
import { SelectContext } from "./Main";
import { textColor } from "../static";

export default function MainMenu() {
  const { selected, setSelected, pages } = useContext(SelectContext);

  const isBelowMedium = useMediaQuery("(max-width:800px)");

  const titleFontSize = isBelowMedium ? 18 : 28;
  const containerWidth = isBelowMedium ? "30%" : "20%";

  return (
    <Grid
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{
        width: containerWidth,
        height: "100%",
        mt: 3,
      }}
    >
      {pages.map((page: IPage) => (
        <div
          key={page.title}
          onClick={() => setSelected(page)}
          className="page-menu"
        >
          {selected.title === page.title ? (
            <ArrowForwardIosIcon sx={{ color: textColor }} />
          ) : null}
          <Typography variant="h5" color={textColor}>
            {page.title}
          </Typography>
        </div>
      ))}
    </Grid>
  );
}
