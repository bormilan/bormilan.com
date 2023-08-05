import { Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { IPage } from "../types";
import { useContext } from "react";
import { SelectContext } from "./Main";

export default function MainMenu() {
  const { selected, setSelected, pages } = useContext(SelectContext);

  return (
    <Grid
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{
        width: "20%",
        height: "100%",
      }}
    >
      {pages.map((page: IPage) => (
        <div
          key={page.title}
          onClick={() => setSelected(page)}
          className="page-menu"
        >
          {selected.title === page.title ? (
            <ArrowForwardIosIcon sx={{ color: "white" }} />
          ) : null}
          <Typography variant="h5" color="white">
            {page.title}
          </Typography>
        </div>
      ))}
    </Grid>
  );
}
