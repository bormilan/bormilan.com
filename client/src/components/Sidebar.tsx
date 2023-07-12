import { IconButton, Link } from "@mui/material";
import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

export default function SideBar() {
  const [hovered, setHovered] = useState([false, false, false, false]);

  const handleMouseHover = (id: number, isEnter: boolean) => {
    setHovered([...hovered.slice(0, id), isEnter, ...hovered.slice(id + 1)]);
  };
  return (
    <div className="sidebar">
      <IconButton
        onMouseEnter={() => handleMouseHover(0, true)}
        onMouseLeave={() => handleMouseHover(0, false)}
        href="https://www.linkedin.com/in/bormilan21"
        target="_blank"
      >
        <LinkedInIcon sx={{ fontSize: hovered[0] ? 30 : 24 }} />
      </IconButton>

      <IconButton
        onMouseEnter={() => handleMouseHover(1, true)}
        onMouseLeave={() => handleMouseHover(1, false)}
        href="https://github.com/bormilan"
        target="_blank"
      >
        <GitHubIcon sx={{ fontSize: hovered[1] ? 30 : 24 }} />
      </IconButton>
      <IconButton
        onMouseEnter={() => handleMouseHover(2, true)}
        onMouseLeave={() => handleMouseHover(2, false)}
        href="https://www.linkedin.com/in/bormilan21"
        target="_blank"
      >
        <MailIcon sx={{ fontSize: hovered[2] ? 30 : 24 }} />
      </IconButton>
      <IconButton
        onMouseEnter={() => handleMouseHover(3, true)}
        onMouseLeave={() => handleMouseHover(3, false)}
        href="https://www.linkedin.com/in/bormilan21"
        target="_blank"
      >
        <InsertDriveFileIcon sx={{ fontSize: hovered[3] ? 30 : 24 }} />
      </IconButton>
    </div>
  );
}
