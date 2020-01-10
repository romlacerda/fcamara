import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Menu from './components/Menu';
import Home from './pages/Home';
import Message from './pages/Message';

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/cadastrar" component={Message} />
      </Switch>
    </Router>
  );
}

export default App;
