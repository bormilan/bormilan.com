import { Divider, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { getImageByName } from "../../static";
import { ISection } from "../../types";
import { SelectContext } from "../Main";
import sectionsJson from "../../data/sections.json";

export default function Home() {
  const sections = sectionsJson;

  return (
    <div className="page">
      <Typography variant="h5" color="white">
        Here you can see all the features of this site:
      </Typography>
      <Divider color="white" variant="middle" sx={{ margin: "15px" }} />
      <div className="section-container">
        {sections.map((section: ISection, i) => (
          <Section section={section} index={i + 1} />
        ))}
      </div>
    </div>
  );
}

type Props = {
  section: ISection;
  index: number;
};

export function Section({ section, index }: Props) {
  const { setSelected, pages } = useContext(SelectContext);

  return (
    <div className="section" onClick={() => setSelected(pages[index])}>
      <Grid display="flex" flexDirection="column">
        <Typography variant="h6" color="white">
          {section.headline}
        </Typography>
        <Typography variant="body1" color="white">
          {section.text}
        </Typography>
      </Grid>
      {getImageByName(section.imageName)}
    </div>
  );
}
