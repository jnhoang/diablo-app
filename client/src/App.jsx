import React, { Component } from 'react';
import {
  BrowserRouter as Router
, Route
} from 'react-router-dom';

import Home from './home/Home';
import Char from './character/Char';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/character/:battleTag/:id" component={Char} />
        </div>
      </Router>
    );
  }
}

export default App;
