import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
export function About() {
  return (
    <div>
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
          Welcome to my personal website, where you can learn everything you
          need to know about me, my profession and what makes me special as a
          person.
        </Typography>
        <br />
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
          Full stack Developer Based on Tamil Nadu, India.
        </Typography>{" "}
        <br />
        <Typography
          style={{ fontSize: "20px", fontWeight: "bold", textAlign: "justify" }}
          variant="body2"
          color="text.secondary"
        >
          Bachelor in Electronics and Communication Engineering and Always on
          the lookout for new and exciting ways to leverage Web Development to
          create unforgettable experiences and impressions.
        </Typography>
        <br />
        <br />
        <Typography
          style={{ fontSize: "30px", fontWeight: "bold", textAlign: "justify" }}
          variant="h1"
          component="div"
          gutterBottom
          color="text.secondary"
        >
          Languages and Libraries
        </Typography>{" "}
        <br />
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
        <br />
        <Typography
          style={{ fontSize: "30px", fontWeight: "bold", textAlign: "justify" }}
          variant="h1"
          component="div"
          gutterBottom
          color="text.secondary"
        >
          Tools and Softwares
        </Typography>{" "}
        <br />
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
