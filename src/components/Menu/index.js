import React from 'react';
import {
  Tab, Paper, Tabs,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default () => (
  <>
    <Paper square style={{ backgroundColor: '#47579e' }}>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example"
      >
        <Tab label="Dashboard" component={Link} to="/home" />
        <Tab label="Cadastrar" component={Link} to="/cadastrar" />
      </Tabs>
    </Paper>
  </>
);
