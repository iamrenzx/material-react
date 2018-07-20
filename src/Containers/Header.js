import React, { Component } from 'react';
import { Grid, AppBar, MenuItem, Toolbar, Typography, Button, Menu } from '@material-ui/core';
import { white, green400 } from 'material-ui/styles/colors';
import { AccountCircle } from '@material-ui/icons/';
import './header.css'

class Header extends Component {
  state = {
    anchorEl: null,
    name:'Default',
    corporation: 'Default'
  };


  handleClick = event => {
    this.setState({ 
      anchorEl: event.currentTarget,
      name:'Renz Delicano',
      corporation: 'Hybrain Development Corp'
     });

  };

  handleClose = () => {
    this.setState({ 
      anchorEl: null,
      name:'Default',
      corporation: 'Default'
     });
  };


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

            
            <Typography variant="title" color="inherit" style={styles.flex}>
            {this.props.hello}
            </Typography>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              color="inherit"
            >
              <AccountCircle />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
              <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
            <div className="typoGraphy">
            <Typography variant="title" color="inherit" style={styles.typoFlex}>
              {this.state.name}
            </Typography>
            </div>

            
          </Toolbar>
        </AppBar>
      </div>


    );
  }
};

export default Header;