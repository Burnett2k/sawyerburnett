import React from "react";
import { Root, Routes } from "react-static";
import { Link } from "@reach/router";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { purple, green } from "@material-ui/core/colors";
import "./app.css";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  }
});

function App() {
  return (
    <Root>
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    </Root>
  );
}

export default App;
