import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getImageByName, getSection, textColor } from "../static";
import { IPage, ISection } from "../types";
import { pages, SelectContext } from "./Main";

export default function Page() {
  const { name } = useParams();
  const page: IPage | undefined = pages.find(
    (page: IPage) => page.title === name,
  );

  const { setSelected } = useContext(SelectContext);

  if (!page) {
    return <>no page found</>;
  }

  setSelected(name!);

  const sections: ISection[] = getSection(page.sectionName);

  return (
    <div className="page">
      <Typography variant="h5" color={textColor}>
        {page.headline}
      </Typography>
      <Divider color={textColor} variant="middle" sx={{ margin: "15px" }} />
      <Box
        display="flex"
        flexDirection={page.sectionOrder as "column" | "column-reverse"}
      >
        {sections &&
          sections.map((section: ISection, i) => (
            <Section key={i} section={section} />
          ))}
      </Box>
    </div>
  );
}

type sectionProps = {
  section: ISection;
};

export function Section({ section }: sectionProps) {
  const isBelowSmall = useMediaQuery("(max-width:700px)");
  const isBelowMedium = useMediaQuery("(max-width:1000px)");

  const imageSize = isBelowSmall ? "150px" : "200px";
  const justifyContent = isBelowSmall ? "center" : "space-between";

  const navigate = useNavigate();

  //TODO: refactor this
  const wrap =
    section.config?.wrap === "mobile" && isBelowMedium ? "wrap" : "nowrap";

  function handleClick() {
    if (!section.onClick) {
      return undefined;
    }
    if (section.onClick.type === "page") {
      navigate(`/main/page/${section.onClick.index}`);
    } else if (section.onClick.type === "post") {
      navigate(`/post/${section.onClick.index}`);
    } else if (section.onClick.type === "link") {
      window.open(section.onClick.index, "_blank");
    }
  }

  return (
    <Box display="flex" flexDirection="column" marginTop="20px">
      <div
        className="section"
        onClick={handleClick}
        style={{
          flexWrap: wrap as "wrap" | "nowrap",
          justifyContent: justifyContent,
          alignItems: "flex-start",
        }}
      >
        <Grid display="flex" flexDirection={"column"}>
          <Typography variant="h6" color={textColor} marginBottom="5px">
            {section.headline}
          </Typography>
          {section.texts.map((text, i) => (
            <Typography
              key={i}
              variant="body1"
              color={textColor}
              m="5px"
              ml="15px"
            >
              {text}
            </Typography>
          ))}
        </Grid>
        {section.imageName && (
          <div style={{ height: imageSize }}>
            {getImageByName(section.imageName)}
          </div>
        )}
      </div>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        flexWrap="wrap"
        sx={{ width: "70%" }}
      >
        {section.stamps &&
          section.stamps.map((stamp, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: textColor,
                color: "0c0c0c",
                padding: 1,
                borderRadius: "10px",
                opacity: "0.6",
                marginLeft: "10px",
                marginTop: "5px",
              }}
            >
              {stamp.text}
            </Box>
          ))}
      </Box>
    </Box>
  );
}
