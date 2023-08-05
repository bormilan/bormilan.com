import {
  Box,
  Grid,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
//@ts-ignore
import ProfilePicture from "../images/kiflivel.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import quotesJSON from "../data/quotes.json";
import contactDataJSON from "../data/contact_data.json";

export default function Head() {
  const theme = useTheme();
  const isBelowMedium = useMediaQuery("(min-width:905px)");
  const isBelowsmall = useMediaQuery("(min-width:590px)");
  const isBelow1100 = useMediaQuery("(max-width:1150px)");

  const quoteIndex = Math.floor(
    Math.random() * (quotesJSON.length - 1 - 0 + 1) + 0
  );
  const quote = quotesJSON[quoteIndex];

  const { email, phoneNumber, location } = contactDataJSON;

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      {isBelowMedium ? (
        <Grid display="flex" flexDirection="row" sx={{ width: "100%" }}>
          <Grid sx={{ width: "20%" }}>
            <Tooltip title="Me and my dogy, Kifli">
              <img
                src={ProfilePicture}
                alt={"profile_picture"}
                className="profile-picture"
                style={{ padding: 10 }}
              />
            </Tooltip>
          </Grid>
          <Grid sx={{ paddingRight: 2, width: "60%" }}>
            <Typography variant="h2" color="white">
              Bór Milán
            </Typography>
            <Typography variant="subtitle1" color="white">
              Web Developer, Computer Vision Engineer
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontStyle: "italic",
                color: "white",
                fontSize: isBelow1100 ? 10 : 11,
              }}
            >
              {quote}
            </Typography>
          </Grid>
          <Grid
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-end"
            sx={{ width: "35%", paddingRight: 3 }}
          >
            <Grid
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <PhoneIcon sx={{ color: "white" }} />
              <Typography color="white">
                <a style={{ color: "white" }} href={`tel:${phoneNumber}`}>
                  {phoneNumber}
                </a>
              </Typography>
            </Grid>
            <Grid
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <EmailIcon sx={{ color: "white" }} />
              <Typography color="white">
                <a href={`mailto:${email}`} style={{ color: "white" }}>
                  {email}
                </a>
              </Typography>
            </Grid>
            <Grid
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <LocationOnIcon sx={{ color: "white" }} />
              <Typography color="white">{location}</Typography>
            </Grid>
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
              <Typography variant={isBelowMedium ? "h2" : "h3"} color="white">
                Bór Milán
              </Typography>
              <Typography variant="subtitle2" color="white">
                Web Developer, Computer Vision Engineer
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
