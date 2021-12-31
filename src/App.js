import "./App.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Route, Switch, useHistory } from "react-router-dom";
import { Homepage } from "./Main";
import Avatar from "@mui/material/Avatar";
import { About } from "./About";
import Typography from "@mui/material/Typography";

export default function App() {
  const history = useHistory();
  return (
    <div className="app">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Avatar
            style={{ margin: "10px" }}
            alt="Travis Howard"
            src="https://avatars.githubusercontent.com/u/90443069?v=4"
          />
          <Typography variant="h6" color="inherit" component="div">
            Rajkumar Murugesan
          </Typography>
          <div className="navbtn">
            <Button onClick={() => history.push("/")} color="inherit">
              Home
            </Button>
            <Button onClick={() => history.push("/About")} color="inherit">
              About
            </Button>
            <Button onClick={() => history.push("/Projects")} color="inherit">
              Projects
            </Button>
            <Button onClick={() => history.push("/contact")} color="inherit">
              Contact
            </Button>
            <Button onClick={() => history.push("/Resume")} color="inherit">
              Resume
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/projects">
          <h1>Projects</h1>
        </Route>
        <Route path="/contact">
          <Contact />
          </Route>
          <Route path="/Resume">
          <Resume />
        </Route>
      </Switch>
    </div>
  );
}

function Contact() {
  return <h1>Contact</h1>;
}
function Resume() {
  return <h1>Resume</h1>;
}

