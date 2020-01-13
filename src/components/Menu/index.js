import React, { Component } from 'react';
import {
  Tab, Paper, Tabs,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuUtil from '../../services/menu';

class Menu extends Component {
  state = {
    selectedTab: 0,
  };

  handleTabClick = (e, value) => {
    this.setState({ selectedTab: value });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <>
        <Paper square style={{ backgroundColor: '#47579e' }}>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            value={selectedTab}
            onChange={this.handleTabClick}
          >
            { MenuUtil.map((menu) => <Tab key={menu.id} label={menu.title} to={menu.path} component={Link} />) }
          </Tabs>
        </Paper>
      </>
    );
  }
}

export default Menu;
