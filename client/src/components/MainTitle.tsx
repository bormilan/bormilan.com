import { Grid, Typography, useMediaQuery } from "@mui/material";

import { getIconByName, textColor } from "../static";
import { IPage } from "../types";
import { pages } from "./Main";

type Props = {
  pageId: string;
};

export default function MainTitle({ pageId }: Props) {
  const page: IPage | undefined = pages.find(
    (page: IPage) => page.title === pageId,
  );
  const isBelowSmall = useMediaQuery("(max-width:600px)");
  const isBelowMedium = useMediaQuery("(max-width:800px)");

  const marginLeft = isBelowMedium ? 2 : 5;
  const marginTop = isBelowMedium ? 5 : 0;
  const titleMargin = isBelowMedium ? 1 : 5;
  const width = isBelowSmall ? "55%" : "80%";

  if (!page) {
    return <>no page found</>;
  }

  return (
    <Grid
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ width: width, ml: marginLeft, mt: marginTop }}
    >
      <Grid
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{ height: "30%" }}
      >
        {getIconByName(page.iconName)}
        <Typography variant="h4" color={textColor} sx={{ ml: titleMargin }}>
          {page.title}
        </Typography>
      </Grid>
      <Typography
        variant="subtitle1"
        color={textColor}
        sx={{ mt: 1, textDecoration: "underline" }}
      >
        {page.subtitle}
      </Typography>
    </Grid>
  );
}
