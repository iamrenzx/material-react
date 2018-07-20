import React, { Component } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, ListSubheader } from '@material-ui/core';
import { white, green400 } from 'material-ui/styles/colors';
import {
  Explore,
  Group,
  LocalMall,
  ExpandLess,
  ExpandMore,
  Business,
  AttachMoney,
  NoteAdd,
  InsertChart,
  CreditCard,
  CardGiftcard,
  MultilineChart
} from '@material-ui/icons/';

import { Link } from 'react-router-dom';


//dont delete transition

//transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

const styles = {
  dashboardMargin: {
    marginTop: 20
  }
}

class Sidebar extends Component {
  state = {
    openAccounting: false,
    openInventory: false
  };

  handleClickAccounting = () => {
    this.setState(state => ({ openAccounting: !state.openAccounting }));
  };
  handleClickInventory = () => {
    this.setState(state => ({ openInventory: !state.openInventory }));
  };
  render() {

    return (
      <div style={styles.dashboardMargin}>
        <List
          component="nav"
          subheader={<ListSubheader component="div"></ListSubheader>}
        >
          <Link to="/">
            <ListItem button>
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
              <ListItemText inset primary="Dashboard" />
            </ListItem>
          </Link>

          <Link to="/topics">
            <ListItem button>

              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText inset primary="Contacts" />
            </ListItem>
          </Link>

          <ListItem button onClick={this.handleClickInventory}>
            <ListItemIcon>
              <LocalMall />
            </ListItemIcon>
            <ListItemText inset primary="Inventory" />
            {this.state.openInventory ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={this.state.openInventory} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemIcon>
                  <Business />
                </ListItemIcon>
                <ListItemText inset primary="Business" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <Business />
                </ListItemIcon>
                <ListItemText inset primary="Corporation" />
              </ListItem>

            </List>
          </Collapse>


          <ListItem button onClick={this.handleClickAccounting}>
            <ListItemIcon>
              <AttachMoney />
            </ListItemIcon>
            <ListItemText inset primary="Accounting" />
            {this.state.openAccounting ? <ExpandLess /> : <ExpandMore />}
          </ListItem>


          <Collapse in={this.state.openAccounting} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemIcon>
                  <NoteAdd />
                </ListItemIcon>
                <ListItemText inset primary="Manual Journals" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <InsertChart />
                </ListItemIcon>
                <ListItemText inset primary="Chart of Accounts" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <CardGiftcard />
                </ListItemIcon>
                <ListItemText inset primary="Vouchers" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <CreditCard />
                </ListItemIcon>
                <ListItemText inset primary="Billing" />
              </ListItem>

            </List>
          </Collapse>


          <ListItem button>
            <ListItemIcon>
              <MultilineChart />
            </ListItemIcon>
            <ListItemText inset primary="Reports" />
          </ListItem>

        </List>
      </div>
    );
  }
}
export default Sidebar;