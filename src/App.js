import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Helmet } from 'react-helmet';
import Menu from './components/Menu';
import MenuUtil from './services/menu';

function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fcamara</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Menu />
      <Switch>
        { MenuUtil.map((menu) => <Route key={menu.id} path={menu.path} component={menu.component} />) }
      </Switch>
    </Router>
  );
}

export default App;
