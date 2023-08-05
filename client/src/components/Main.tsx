import { Grid } from "@mui/material";
import { createContext, useState } from "react";
import MainMenu from "./MainMenu";
import MainTitle from "./MainTitle";
import Home from "./Pages/Home";

import pagesJson from "../data/pages.json";
import { getIconByName, getPageByName } from "../static";
import { IPage, IPageJson } from "../types";

export const SelectContext = createContext<{
  selected: IPage;
  setSelected: (p: IPage) => void;
  pages: IPage[];
}>({
  selected: {} as IPage,
  setSelected: () => {},
  pages: [],
});

export default function Main() {
  const pages: IPage[] = pagesJson.map((page: IPageJson) => {
    return {
      title: page.title,
      subtitle: page.subtitle,
      component: getPageByName(page.component),
      icon: getIconByName(page.iconName),
    } as IPage;
  }) as IPage[];

  const [selected, setSelected] = useState<IPage>(pages[0]);

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
        sx={{ width: "100%" }}
      >
        <Grid
          display="flex"
          flexDirection="row"
          sx={{ height: "200px", width: "100%" }}
        >
          <MainTitle page={selected} />
          <MainMenu />
        </Grid>
        {selected.component}
      </Grid>
    </SelectContext.Provider>
  );
}
