import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export function Contact() {
  const iconstyle = {
    display: "inline",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "justify",
  };
  return (
    <div className="contact">
      <div className="links">
        <Typography
          style={{ fontSize: "40px", fontWeight: "bold", textAlign: "justify" }}
          variant="body2"
          color="text.secondary"
        >
         I'd be delighted to hear from you..
        </Typography>
        <img
          className="profile"
          src="https://avatars.githubusercontent.com/u/90443069?v=4"
          alt="Rajkumar"
        />
        <Typography
          style={{
            margin: "20px",
            width: "50%",
            fontSize: "25px",
            fontWeight: "bold",
            textAlign: "justify",
          }}
          variant="body2"
          color="text.secondary"
        >
         Raj here, an Indian web developer. I adore creating beautiful and functional webpages that intuitively solve problems.
        </Typography>
        <IconButton aria-label="Phone">
          <PhoneAndroidIcon />
          <Typography style={iconstyle} variant="body2" color="text.secondary">
            +91-965 925 6401
          </Typography>
        </IconButton>

        <IconButton
          href="mailto:rajkumarm688@gmail.com"
          target="_blank"
          aria-label="mailto"
        >
          <EmailIcon />
          <Typography style={iconstyle} variant="body2" color="text.secondary">
            rajkumarm688@gmail.com
          </Typography>
        </IconButton>

        <IconButton
          href="https://github.com/rajm688"
          target="_blank"
          aria-label="GitHub"
        >
          {" "}
          <GitHubIcon />
          <Typography style={iconstyle} variant="body2" color="text.secondary">
            GitHub
          </Typography>
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/rajkumar-murugesan-b7065495/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
          <Typography style={iconstyle} variant="body2" color="text.secondary">
            LinkedIn
          </Typography>
        </IconButton>
      </div>
    </div>
  );
}
