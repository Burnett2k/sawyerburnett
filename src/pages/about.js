import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default () => (
  <div>
    <Paper elevation={1}>
      <Typography variant="h5" component="h3">
        I am a programmer currently working on ReactJS applications, but I do
        enjoy dabbling in other technologies quite often. Some of my interests
        are material design, page rendering performance, user experience, unit
        testing, and solving problems. This site is currently being converted to
        use Material-UI which is a ReactJS framework which implements Google's
        Material Design philosophy.
      </Typography>
      <ul>
        <li>
          <a
            href="http://github.com/burnett2k"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="http://linkedin.com/in/sawyer-burnett-9176411b"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>

      <p>Recommended Reading:</p>
      <ul>
        <li>
          {" "}
          <a
            href="https://www.goodreads.com/book/show/25744928-deep-work?from_search=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deep Work
          </a>{" "}
          by Cal Newport
        </li>
        <li>
          {" "}
          <a
            href="https://www.goodreads.com/book/show/27968891-site-reliability-engineering?from_search=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site Reliability Engineering
          </a>{" "}
          by Google
        </li>
        <li>
          {" "}
          <a
            href="https://www.goodreads.com/book/show/17255186-the-phoenix-project?ac=1&from_search=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Phoenix Project
          </a>{" "}
          by Gene Kim, Kevin Behr, George Spafford
        </li>
        <li>
          {" "}
          <a
            href="https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer?ac=1&from_search=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Pragmatic Programmer
          </a>{" "}
          by Andy Hunt and Dave Thomas
        </li>
        <li>
          {" "}
          <a
            href="https://www.goodreads.com/book/show/19288230-scrum"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scrum: The Art of Doing Twice the Work in Half the Time
          </a>{" "}
          by Jeff Sutherland
        </li>
        <li>
          {" "}
          <a
            href="https://www.goodreads.com/book/show/23158207-how-google-works"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Google Works
          </a>{" "}
          by Eric Schmidt
        </li>
        <li>
          {" "}
          <a
            href="https://www.goodreads.com/book/show/24724602-flash-boys"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flash Boys
          </a>{" "}
          by Michael Lewis
        </li>
      </ul>
    </Paper>
  </div>
);
