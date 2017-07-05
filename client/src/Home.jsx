import React, { Component } from 'react';
import Hero from './components/Hero';

class Home extends Component {
	constructor(props) {
    super(props);

    this.state = {
      acctInfo: ''
    };
  } 
  componentDidMount() {
	  fetch('/account')
	  .then(  (data) => data.json() )
	  .then(  (json) => this.setState({ acctInfo: json.data }) )
	  .catch( (err)  => console.log(err) );
	}
	render() {
    let info = this.state.acctInfo;
		console.log(info)
    return (
      <div>
        <h1>{info ? info.battleTag : "Loading" }</h1>
        {info 
          ? info.heroes.map( (hero, index) => <Hero hero={hero} key={index} /> )
          : null
        }
      </div>
		);
	}
}
export default Home;