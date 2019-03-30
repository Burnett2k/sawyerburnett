import React from "react";
import { Root, Routes } from "react-static";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import { purple, green } from "@material-ui/core/colors";
import { AppBar, Toolbar, Drawer, Typography } from "@material-ui/core";
import SimpleMenu from "./containers/Menu.js";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  }
});

function App(props) {
  const { classes } = props;
  return (
    <Root>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <SimpleMenu />

                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.grow}
                >
                  Sawyer Burnett
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer />
            <div className="content">
              <Routes />
            </div>
          </div>
        </CssBaseline>
      </MuiThemeProvider>
    </Root>
  );
}

export default withStyles(styles)(App);
