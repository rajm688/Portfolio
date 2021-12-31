import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
export function About() {
  return (
    <div>
      <div className="links">

        <IconButton aria-label="delete">
          <PhoneAndroidIcon />
          <Typography
            style={{
              display: "inline",
              fontSize: "15px",
              fontWeight: "bold",
              textAlign: "justify",
            }}
            variant="body2"
            color="text.secondary"
          >
            +91-965 925 6401
          </Typography>
        </IconButton>

        <IconButton aria-label="delete">
          <EmailIcon />
          <Typography
            style={{
              display: "inline",
              fontSize: "15px",
              fontWeight: "bold",
              textAlign: "justify",
            }}
            variant="body2"
            color="text.secondary"
          >
            rajkumarm688@gmail.com
          </Typography>
        </IconButton>

        <IconButton aria-label="delete">
          {" "}
          <GitHubIcon />
          <Typography
            style={{
              display: "inline",
              fontSize: "15px",
              fontWeight: "bold",
              textAlign: "justify",
            }}
            variant="body2"
            color="text.secondary"
          >
            GitHub
          </Typography>
        </IconButton>
      </div>
      <div className="about">
        <Typography
          style={{ fontSize: "30px", fontWeight: "bold", textAlign: "justify" }}
          variant="h1"
          component="div"
          gutterBottom
          color="text.secondary"
        >
          Hello there !!!
        </Typography>
        <Typography
          style={{ fontSize: "20px", fontWeight: "bold", textAlign: "justify" }}
          variant="body2"
          color="text.secondary"
        >
          &nbsp;Welcome to my personal website, here you
          will have all the necessary information about me, my work, my hobbies
          and what makes me unique as a person. Always focused on creating
          remarkable experiences and amazing impressions through Web
          Development... anytime, anywhere.
        </Typography>
        <br />

        <Typography
          style={{ fontSize: "30px", fontWeight: "bold", textAlign: "justify" }}
          variant="h1"
          component="div"
          gutterBottom
          color="text.secondary"
        >
          Basic Information
        </Typography>
        <Typography
          style={{ fontSize: "20px", fontWeight: "bold", textAlign: "justify" }}
          variant="body2"
          color="text.secondary"
        >
          &nbsp;I,m a beginner in Full stack Developer
          Based on Tamil Nadu, India.
        </Typography>
        <br />
        <Typography
          style={{ fontSize: "20px", fontWeight: "bold", textAlign: "justify" }}
          variant="body2"
          color="text.secondary"
        >
          &nbsp;I am a Bachelor in Electronics and
          Communication Engineering and stared learning programming on Full Stack Developer
        </Typography>
        <br />
        <Typography
          style={{ fontSize: "30px", fontWeight: "bold", textAlign: "justify" }}
          variant="h1"
          component="div"
          gutterBottom
          color="text.secondary"
        >
          Languages and Libraries
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap" gap="10px">
          <Chip label="HTML 5" />
          <Chip label="CSS 3" />
          <Chip label="JavaScript" />
          <Chip label="React.JS" />
          <Chip label="Node.JS" />
          <Chip label="REST API" />
          <Chip label="My SQL" />
          <Chip label="MongoDB" />
          <Chip label="Bootstrap" />
          <Chip label="AWS" />
          <Chip label="Material UI" />
          <Chip label="Python" variant="outlined" />
          <Chip label="Jquery" variant="outlined" />
        </Stack>
        <br />
        <Typography
          style={{ fontSize: "30px", fontWeight: "bold", textAlign: "justify" }}
          variant="h1"
          component="div"
          gutterBottom
          color="text.secondary"
        >
          Tools and Softwares
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" gap="10px">
          <Chip label="VS Code" />
          <Chip label="Git" />
          <Chip label="Git Hub" />
          <Chip label="Netlify" />
          <Chip label="HeroKu" />
          <Chip label="CodeSand Box" />
        </Stack>
      </div>
    </div>
  );
}