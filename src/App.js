import "./App.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Route, Switch, useHistory } from "react-router-dom";
import { Homepage } from "./Main";
export default function App() {
  const history = useHistory();
  return (
    <div className="app">
      <AppBar position="static">
        <Toolbar variant="dense">
        <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/90443069?v=4" />

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
          </div>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/About">
          <h1>About</h1>
        </Route>
        <Route path="/projects">
          <h1>Projects</h1>
        </Route>
        <Route path="/contact">
          <h1>contact</h1>
        </Route>
      </Switch>
    </div>
  );
}


