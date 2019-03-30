import React from "react";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import { Link } from "@reach/router";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20
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
          <MenuItem onClick={this.handleClose}>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to="/about">About</Link>
          </MenuItem>

          <MenuItem onClick={this.handleClose}>
            <Link to="/projects">Projects</Link>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(NavigationMenu);
