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
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Notfound } from "./Notfound";
// import ends here

export default function App() {
  //hooks used here
  const [theme, settheme] = useState("light");
  const history = useHistory();

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper className="body" elevation={3}>
        <div className="app">
          <AppBar className="appbarstyle" position="static">
            <Toolbar variant="dense">
              <Avatar
                className="img"
                style={{ margin: "15px" }}
                alt="Rajkumar"
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
                <Button
                  onClick={() => history.push("/Projects")}
                  color="inherit"
                >
                  Projects
                </Button>
                <Button
                  onClick={() => history.push("/contact")}
                  color="inherit"
                >
                  Contact
                </Button>
                <Button
                  href="https://drive.google.com/file/d/1sAxJo9PuNuvFaAfHfJRg0QzB4xSZc0fR/view?usp=sharing"
                  target="_blank"
                  color="inherit"
                >
                  Resume
                </Button>
                <Button
                  onClick={() => {
                    settheme(theme === "light" ? "dark" : "light");
                  }}
                  color="inherit"
                >
                  {theme === "dark" ? <LightModeIcon /> : <NightsStayIcon />}
                </Button>
              </div>
            </Toolbar>
          </AppBar>
          {/* routing Switch statement starts here */}
          
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/projects">
              <Projects theme={theme} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="**">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
