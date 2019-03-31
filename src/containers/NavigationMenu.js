import React from "react";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
};

class NavigationMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={this.handleClick}
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem component="a" href="/" onClick={this.handleClose}>
            Home
          </MenuItem>
          <MenuItem component="a" href="/about" onClick={this.handleClose}>
            About
          </MenuItem>
          <MenuItem component="a" href="/projects" onClick={this.handleClose}>
            Projects
          </MenuItem>
          <MenuItem component="a" href="/consulting" onClick={this.handleClose}>
            Consulting
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(NavigationMenu);
