import React from "react";
import { Root, Routes } from "react-static";
import { Link } from "@reach/router";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./app.css";

function App() {
  return (
    <Root>
      <CssBaseline>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </nav>
        <div className="content">
          <Routes />
        </div>
      </CssBaseline>
    </Root>
  );
}

export default App;
