import React from "react";
import Panel from "../containers/Panel.js";

const projects = [
  {
    id: 0,
    title: "Work Timer",
    link: "https://github.com/Burnett2k/work-timer"
  },
  {
    id: 1,
    title: "Work Timer React",
    link: "https://worktimer.xyz"
  },
  {
    id: 2,
    title: "Workout Manager",
    link: "https://github.com/Burnett2k/workout-manager"
  },
  {
    id: 3,
    title: "Bash Practice",
    link: "https://github.com/Burnett2k/BashPractice"
  }
];

export default () => (
  <div>
    <h1>Projects</h1>
    <ul>
      {projects.map(project => (
        <React.Fragment>
          <Panel key={project.id} title={project.title} link={project.link} />
        </React.Fragment>
      ))}
    </ul>
  </div>
);
