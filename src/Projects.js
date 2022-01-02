import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function Projects() {
  const ProjectName = [
    {
      name: "Movie-List CRUD ",
      Details: "Fetching and Performing CRUD operations in Mock API",
      Tools: "Rract",
      link: "https://tic-tak-toe-react.netlify.app/",
    },
    {
      name: "Tic-Tak-Toe",
      Details: "React-based interactive tic-tac-toe game",
      Tools: "React",
      link: "https://tic-tak-toe-react.netlify.app/",
    },
    {
      name: "Thirukkural API",
      Details:
        "Collection of thirukkurals ordered by the number chosen from the API",
      Tools: "Javascript DOM",
      link: "https://findmythirukkural.netlify.app/",
    },
    {
      name: "Harrypotter API",
      Details:
        "Fetching and presenting information of the characters in Harry Potter moive",
      Tools: "Javascript DOM",
      link: "https://harrypotter-api.netlify.app/",
    },
    {
      name: "Calculator",
      Details:
        "Created an interactive Calculator to do simple math operations.",
      Tools: "Javascript DOM",
      link: "https://calculatorwithdom.netlify.app/",
    },
  ];
  return (
    <div style={{ margin: "50px" }}>
      <div>
        <Typography
          style={{ fontSize: "30px", fontWeight: "bold", textAlign: "justify" }}
          variant="h1"
          component="div"
          gutterBottom
          color="text.secondary"
        >
          My Initiatives
        </Typography>
        <Typography
          style={{ fontSize: "18px", fontWeight: "bold", textAlign: "justify" }}
          variant="body2"
          color="text.secondary"
        >
          Take a peek at some of my work listed below.
        </Typography>{" "}
      </div>
      <br />
      <div className="Projects">
        {ProjectName.map(({ name, Details, Tools, link }) => (
          <ProjectDetails
            name={name}
            Details={Details}
            Tools={Tools}
            link={link}
          />
        ))}
      </div>
    </div>
  );
}
function ProjectDetails({ name, Details, Tools, link }) {
  return (
    <div className="trans">
      <Card
        sx={{
          width: "200px",
          height: "250px",
          background: "linear-gradient(45deg, #3f7afa 30%, #05cdff 50%)",
        }}
      >
        <CardContent>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <br />
          <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
            {Tools}
          </Typography>
          <Typography variant="body2">{Details}</Typography>
        </CardContent>
        <CardActions>
          <Button
            style={{ color: "white" }}
            href={link}
            target="_blank"
            size="small"
          >
            <Typography variant="body2">explore</Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
