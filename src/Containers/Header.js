import React, { Component } from 'react';
import { Grid, AppBar, MenuItem, Toolbar, Typography, Button, Menu, IconButton } from '@material-ui/core';
import { white, green400 } from 'material-ui/styles/colors';
import { AccountCircle, Menu as MenuIcon } from '@material-ui/icons/';

import './header.css'

class Header extends Component {

  constructor(props){
    super(props)
    this.state = {
      anchorEl: null,
      corporation: 'Material IO'
  
    };
  }


  handleMenuItemClick = event => {
    this.setState({
      anchorEl: event.currentTarget,

    });

  };

  handleMenuItemClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  handleHamburgerMenuClick = event => {
    //call function of parent component to change value of sidebar
    this.props.sidebarValue();
  }



  render() {


    const { anchorEl } = this.state;




    const styles = {
      root: {
        flexGrow: 1,
      },
      flex: {
        flexGrow: 60,
      },
      typoFlex: {
        flexGrow: 1,  
      },


    };



    return (

      <div style={styles.root}>
        <AppBar position="static" >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.handleHamburgerMenuClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" style={styles.flex}>
              {this.state.corporation}
            </Typography>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleMenuItemClick}
              color="inherit"
            >
              <AccountCircle />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleMenuItemClose}
            >
              <MenuItem onClick={this.handleMenuItemClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleMenuItemClose}>My account</MenuItem>
              <MenuItem onClick={this.handleMenuItemClose}>Logout</MenuItem>
            </Menu>
            <div className="typoGraphy">
              <Typography variant="title" color="inherit" style={styles.typoFlex}>
              </Typography>
            </div>


          </Toolbar>
        </AppBar>
      </div>


    );
  }
};

export default Header;