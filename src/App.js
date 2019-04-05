import React from "react";
import { Root, Routes } from "react-static";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  CssBaseline
} from "@material-ui/core";
import NavigationMenu from "./containers/NavigationMenu";

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
    primary: { main: "#00838F" },
    secondary: { main: "#8fa3ad" }
  },
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiCard: {
      root: { width: 400 }
    }
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
                <NavigationMenu />
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
