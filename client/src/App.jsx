import React, { Component } from 'react';
import {
  BrowserRouter as Router
, Route
} from 'react-router-dom';

import './App.css';
import Home from './Home';
import Char from './character/Char';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/character/:id" component={Char} />
        </div>
      </Router>
    );
  }
}

export default App;
