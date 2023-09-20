import { Divider, Grid, useMediaQuery } from "@mui/material";
import { createContext, useState } from "react";
import MainMenu from "./MainMenu";
import MainTitle from "./MainTitle";

import pagesJson from "../data/pages.json";
import { textColor } from "../static";
import { IPage } from "../types";
import Page from "./Page";

export const SelectContext = createContext<{
  selected: IPage;
  setSelected: (p: IPage) => void;
  pages: IPage[];
}>({
  selected: {} as IPage,
  setSelected: () => { },
  pages: [],
});

export default function Main() {
  const pages: IPage[] = pagesJson;

  const [selected, setSelected] = useState<IPage>(pages[0]);

  const isBelowMedium = useMediaQuery("(max-width:800px)");
  const isBelowLarge = useMediaQuery("(max-width:1200px)");

  const dividerMarginRight = isBelowLarge ? 1 : isBelowMedium ? 1 : 3;
  const dividerMarginLeft = isBelowLarge ? 1 : isBelowMedium ? 1 : 3;

  return (
    <SelectContext.Provider
      value={{
        selected,
        setSelected,
        pages,
      }}
    >
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ height: "100%", width: "100%" }}
      >
        <Grid
          display="flex"
          flexDirection="row"
          sx={{ height: "200px", width: "100%" }}
        >
          <MainTitle page={selected} />
          <Divider
            color={textColor}
            variant="middle"
            orientation="vertical"
            sx={{
              marginRight: dividerMarginRight,
              marginLeft: dividerMarginLeft,
              marginTop: 3.5,
            }}
          />
          <MainMenu />
        </Grid>
        <Page page={selected} />
      </Grid>
    </SelectContext.Provider>
  );
}
