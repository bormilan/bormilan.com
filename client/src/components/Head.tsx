import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
//@ts-ignore
import ProfilePicture from "../images/kiflivel.png";

export default function Head() {
  const theme = useTheme();
  const isBelowMedium = useMediaQuery("(min-width:905px)");
  const isBelowsmall = useMediaQuery("(min-width:590px)");
  return (
    <>
      {isBelowMedium ? (
        <Grid display="flex" flexDirection="row" sx={{ width: "100%" }}>
          <img
            src={ProfilePicture}
            alt={"profile_picture"}
            className="profile-picture"
            style={{ padding: 10 }}
          />
          <Grid sx={{ paddingRight: 2 }}>
            <Typography variant="h2" color="white">
              Bór Milán
            </Typography>
            <Typography variant="subtitle1" color="white">
              Web Developer, Computer Vision Engineer
            </Typography>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "white",
              opacity: "40%",
              width: "30%",
              flexGrow: 1,
              borderRadius: "0 18px 18px 0",
            }}
          >
            <></>
          </Grid>
        </Grid>
      ) : (
        <Grid display="flex" flexDirection="column" sx={{ width: "100%" }}>
          <Grid display="flex" flexDirection="row" sx={{ width: "100%" }}>
            <img
              src={ProfilePicture}
              alt={"profile_picture"}
              className="profile-picture-small"
              style={{ padding: 10 }}
            />
            <Grid sx={{ paddingRight: 2 }}>
              <Typography variant="h3" color="white">
                Bór Milán
              </Typography>
              <Typography variant="subtitle2" color="white">
                Web Developer, Computer Vision Engineer
              </Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "white",
              opacity: "40%",
              flexGrow: 1,
              borderRadius: "0 0 15px 15px",
              width: "100%",
            }}
          >
            <>t</>
          </Grid>
        </Grid>
      )}
    </>
  );
}
