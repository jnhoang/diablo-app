import React, { Component } from 'react';
import {
  BrowserRouter as Router
, Route
} from 'react-router-dom';

import './App.css';
import Home from './Home';

class App extends Component {
  // componentDidMount() {
  //   fetch('/account')
  //   .then(  (data) => data.json() )
  //   .then(  (json) => console.log(json) )
  //   .catch( (err)  => console.log(err) );
  // }
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home}/>
      </Router>
    );
  }
}

export default App;
