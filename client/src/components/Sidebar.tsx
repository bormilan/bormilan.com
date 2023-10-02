import { IconButton, Link, Tooltip } from "@mui/material";
import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import contactDataJSON from "../data/contact_data.json";

export default function SideBar() {
  const [hovered, setHovered] = useState([false, false, false, false]);

  const { email } = contactDataJSON;

  const handleMouseHover = (id: number, isEnter: boolean) => {
    setHovered([...hovered.slice(0, id), isEnter, ...hovered.slice(id + 1)]);
  };
  return (
    <div className="sidebar">
      <Tooltip title="LinkedIn">
        <IconButton
          onMouseEnter={() => handleMouseHover(0, true)}
          onMouseLeave={() => handleMouseHover(0, false)}
          href="https://www.linkedin.com/in/bormilan21"
          target="_blank"
          aria-label="linkedIn"
        >
          <LinkedInIcon sx={{ fontSize: hovered[0] ? 30 : 24 }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="GitHub">
        <IconButton
          onMouseEnter={() => handleMouseHover(1, true)}
          onMouseLeave={() => handleMouseHover(1, false)}
          href="https://github.com/bormilan"
          target="_blank"
          aria-label="GitHub"
        >
          <GitHubIcon sx={{ fontSize: hovered[1] ? 30 : 24 }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Email">
        <IconButton
          onMouseEnter={() => handleMouseHover(2, true)}
          onMouseLeave={() => handleMouseHover(2, false)}
          href={`mailto:${email}`}
          target="_blank"
        >
          <MailIcon sx={{ fontSize: hovered[2] ? 30 : 24 }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="CV">
        <IconButton
          onMouseEnter={() => handleMouseHover(3, true)}
          onMouseLeave={() => handleMouseHover(3, false)}
          href="https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/mil%C3%A1n-b%C3%B3r/628e7cfb-4922-4c0e-9024-f15286942715?view=html"
          target="_blank"
        >
          <InsertDriveFileIcon sx={{ fontSize: hovered[3] ? 30 : 24 }} />
        </IconButton>
      </Tooltip>
    </div>
  );
}
