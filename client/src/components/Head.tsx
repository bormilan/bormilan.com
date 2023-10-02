import {
  Box,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
//@ts-ignore
import ProfilePicture from "../images/kiflivel.png";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import quotesJSON from "../data/quotes.json";
import contactDataJSON from "../data/contact_data.json";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { textColor } from "../static";

export default function Head() {
  const isBelowMedium = useMediaQuery("(min-width:1000px)");
  const isBelow1100 = useMediaQuery("(max-width:1150px)");

  const quoteIndex = Math.floor(
    Math.random() * (quotesJSON.length - 1 - 0 + 1) + 0,
  );
  const quote = quotesJSON[quoteIndex];

  const { email, location, linkedInLink, githubLink, cvLink } = contactDataJSON;

  return (
    <Box sx={{ height: "100%" }}>
      {isBelowMedium ? (
        <Grid
          display="flex"
          flexDirection="row"
          sx={{ height: "100%", width: "100%" }}
        >
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
            <Typography variant="h2" color={textColor}>
              Bór Milán
            </Typography>
            <Typography variant="subtitle1" color={textColor}>
              Web Developer, Computer Vision Engineer
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontStyle: "italic",
                color: textColor,
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
            alignItems="center"
            sx={{ width: "35%", paddingRight: 3 }}
          >
            <Grid
              display="flex"
              flexDirection="row"
              justifyContent="center"
              sx={{ width: "100%", mb: "5px" }}
            >
              <Tooltip title="LinkedIn">
                <IconButton
                  href={linkedInLink}
                  target="_blank"
                  aria-label="linkedIn"
                >
                  <LinkedInIcon sx={{ color: "white", mb: "5px" }} />
                </IconButton>
              </Tooltip>
              <IconButton
                href={githubLink}
                target="_blank"
                aria-label="linkedIn"
              >
                <GitHubIcon
                  sx={{ color: "white", mb: "5px", ml: "5px", mr: "5px" }}
                />
              </IconButton>
              <IconButton href={cvLink} target="_blank" aria-label="linkedIn">
                <InsertDriveFileIcon sx={{ color: "white", mb: "5px" }} />
              </IconButton>
            </Grid>
            <Grid
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              sx={{ width: "100%", m: "5px" }}
            >
              <EmailIcon sx={{ color: textColor }} />
              <Typography color={textColor}>
                <a href={`mailto:${email}`} style={{ color: textColor }}>
                  {email}
                </a>
              </Typography>
            </Grid>
            <Grid
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              sx={{ width: "100%", m: "5px" }}
            >
              <LocationOnIcon sx={{ color: textColor }} />
              <Typography color={textColor}>{location}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid
          display="flex"
          flexDirection="column"
          sx={{ height: "100%", width: "100%" }}
        >
          <Grid
            display="flex"
            flexDirection="row"
            sx={{ height: "100%", width: "100%" }}
          >
            <img
              src={ProfilePicture}
              alt={"profile_picture"}
              className="profile-picture-small"
              style={{ padding: 10 }}
            />
            <Grid sx={{ paddingRight: 2, width: "100%" }}>
              <Typography
                variant={isBelowMedium ? "h2" : "h3"}
                color={textColor}
              >
                Bór Milán
              </Typography>
              <Typography variant="subtitle2" color={textColor}>
                Web Developer, Computer Vision Engineer
              </Typography>
              <Grid
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-end"
                sx={{ width: "100%", paddingRight: 3 }}
              >
                <Grid
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  sx={{ width: "100%" }}
                >
                  <EmailIcon sx={{ color: textColor }} />
                  <Typography color={textColor}>
                    <a href={`mailto:${email}`} style={{ color: textColor }}>
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
                  <LocationOnIcon sx={{ color: textColor }} />
                  <Typography color={textColor}>{location}</Typography>
                </Grid>
              </Grid>
              <Box>
                <Grid
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  sx={{ width: "100%", mb: "5px" }}
                >
                  <Tooltip title="LinkedIn">
                    <IconButton
                      href={linkedInLink}
                      target="_blank"
                      aria-label="linkedIn"
                    >
                      <LinkedInIcon sx={{ color: "white", mb: "5px" }} />
                    </IconButton>
                  </Tooltip>
                  <IconButton
                    href={githubLink}
                    target="_blank"
                    aria-label="linkedIn"
                  >
                    <GitHubIcon
                      sx={{ color: "white", mb: "5px", ml: "5px", mr: "5px" }}
                    />
                  </IconButton>
                  <IconButton
                    href={cvLink}
                    target="_blank"
                    aria-label="linkedIn"
                  >
                    <InsertDriveFileIcon sx={{ color: "white", mb: "5px" }} />
                  </IconButton>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
