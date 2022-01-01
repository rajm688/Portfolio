import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function Projects() {
  const ProjectName = [
    {
      name: "Movie List CRUD ",
      Details: "Fetching and Performing CRUD operations in Mock API",
      Tools: "Rract",
      link:"https://tic-tak-toe-react.netlify.app/"
    },
    {
      name: "Tic-Tak-Toe",
      Details: "Interactive Tic-Tak-Toe Game Built using React",
      Tools: "React",
      link:"https://tic-tak-toe-react.netlify.app/"
    },
    {
      name: "Thirukkural API",
      Details: "Select the Thirukkural By providing just a number",
      Tools: "Jaavascript DOM",
      link:"https://findmythirukkural.netlify.app/"
    },
    {
      name: "Harrypotter API",
      Details:
        "Fetching and displaying Details about HarryPotter Movie and its Characters",
      Tools: "Jaavascript DOM",
      link:"https://harrypotter-api.netlify.app/"
    },
    {
      name: "Calculator",
      Details:
        "Built an interacttive Caalculaor for basic arthematic operation",
      Tools: "Jaavascript DOM",
      link:"https://calculatorwithdom.netlify.app/"
    },
  ];
  return (
      <div style={{margin: "50px"}}>
        <div>
        <Typography
          style={{ fontSize: "30px", fontWeight: "bold", textAlign: "justify" }}
          variant="h1"
          component="div"
          gutterBottom
          color="text.secondary"
        >
         
         My projects!!!
        </Typography>
        <Typography style={{fontSize:"18px", fontWeight:"bold", textAlign:"justify"}} variant="body2" color="text.secondary">
            &nbsp; &nbsp; &nbsp; &nbsp; Listed are some of my projects take a look..
            </Typography>  </div><br/>
            <div className="Projects">
      {ProjectName.map(({name,Details,Tools,link})=>(<ProjectDetails name={name} Details={Details} Tools={Tools} link={link}/>))}
      </div></div>
  ) 
}
function ProjectDetails({name,Details,Tools,link}) {
  return (
    <div >
      <Card sx={{ width: "200px", height: "250px" }}>
        <CardContent>
          <Typography variant="h6" component="div">{name}</Typography><br/>
          <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
          {Tools}
          </Typography>
          <Typography variant="body2">
            {Details}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={link} target="_blank" size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
