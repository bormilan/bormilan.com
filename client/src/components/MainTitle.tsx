import { Grid, Typography } from "@mui/material";

import { IPage } from "../types";
import { getIconByName } from "../static";

type Props = {
  page: IPage;
};

export default function MainTitle({ page }: Props) {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ width: "80%", ml: 5 }}
    >
      <Grid
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{ height: "30%" }}
      >
        {page.icon}
        <Typography variant="h4" color="white" sx={{ ml: 5 }}>
          {page.title}
        </Typography>
      </Grid>
      <Typography
        variant="subtitle1"
        color="white"
        sx={{ mt: 1, textDecoration: "underline" }}
      >
        {page.subtitle}
      </Typography>
    </Grid>
  );
}
