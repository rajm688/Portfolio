import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
export function Homepage() {
  return (
    <div className="main">
      <Card>
        <CardMedia 
          component="img"
          image="https://jusmarktech.com/public/a/images/pages/web_development.gif"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              textAlign: "justify",
            }}
            variant="body2"
            color="text.secondary"
          >
            Full Stack Developer
          </Typography>{" "}
          <br />
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              textAlign: "justify",
            }}
            variant="body2"
            color="text.secondary"
          >
            Goal-oriented Web Developer brings strong commitment to
            collaboration and solutions-oriented problem-solving. Use various
            web design packages to develop custom-crafted, customer-focused
            websites and designs.
          </Typography>
          {/* <Button style={{ margin: "10px" }} variant="contained">
            hire Me
            </Button> */}
        </CardContent>
      </Card>
    </div>
  );
}
