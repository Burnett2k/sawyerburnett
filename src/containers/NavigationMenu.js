import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Drawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import { Home, Person, LaptopMac, GroupAdd } from "@material-ui/icons";

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: "auto"
  }
};

class NavigationMenu extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    const list = (
      <div className={classes.list}>
        <List component="nav">
          <ListItem button component="a" href="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="/about">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component="a" href="/projects">
            <ListItemIcon>
              <LaptopMac />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component="a" href="/consulting">
            <ListItemIcon>
              <GroupAdd />
            </ListItemIcon>
            <ListItemText primary="Consulting" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={this.toggleDrawer("left", true)}
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {list}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(NavigationMenu);
