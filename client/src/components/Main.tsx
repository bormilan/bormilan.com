import { Divider, Grid, useMediaQuery } from "@mui/material";
import { createContext, useState } from "react";
import MainMenu from "./MainMenu";
import MainTitle from "./MainTitle";

import pagesJson from "../data/pages.json";
import { textColor } from "../static";
import { IPage } from "../types";
import { Outlet } from "react-router-dom";

export const SelectContext = createContext<{
  selected: string;
  setSelected: (p: string) => void;
  pages: IPage[];
}>({
  selected: {} as string,
  setSelected: () => { },
  pages: [],
});

export const pages: IPage[] = pagesJson;

export default function Main() {
  const [selected, setSelected] = useState<string>(pages[0].title);

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
          <MainTitle pageId={selected} />
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
        <Outlet />
      </Grid>
    </SelectContext.Provider>
  );
}
