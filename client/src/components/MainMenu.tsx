import { Grid, Typography, useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IPage } from "../types";
import { useContext } from "react";
import { SelectContext } from "./Main";
import { textColor } from "../static";
import { useNavigate } from "react-router-dom";

export default function MainMenu() {
  const { selected, pages } = useContext(SelectContext);
  const navigate = useNavigate();

  const isBelowMedium = useMediaQuery("(max-width:800px)");

  const containerWidth = isBelowMedium ? "30%" : "20%";

  function handleClick(title: string) {
    navigate(`/main/page/${title}`);
  }

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
          onClick={() => handleClick(page.title)}
          className="page-menu"
        >
          {selected === page.title ? (
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
