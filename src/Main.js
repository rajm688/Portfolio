import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

export function Homepage() {
  return (
    <div className="main">
      <Card sx={{ width: "80%", height: "90%", margin: "auto" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://cdn2.hubspot.net/hubfs/410369/BuySell%20Ads%20-%20How%20to%20advertise%20to%20developers%20V02-01%20%281%29.png"
            alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Full Stack Developer
            </Typography>
            <Typography style={{fontSize:"15px", fontWeight:"bold", textAlign:"justify"}} variant="body2" color="text.secondary">
            &nbsp; &nbsp; &nbsp; &nbsp; Goal-oriented Web Developer brings strong commitment to
              collaboration and solutions-oriented problem-solving. Use various
              web design packages to develop custom-crafted, customer-focused
              websites and designs. Committed to high standards of user
              experience, usability and speed Lends detailed knowledge of SEO to
              increase visibility.
            </Typography>
            <Button style={{ margin: "10px" }} variant="contained">
              Resume
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
