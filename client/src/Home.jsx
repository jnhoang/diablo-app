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
	  fetch('/api/account')
	  .then(  (data) => data.json() )
	  .then(  (json) => this.setState({ acctInfo: json.data }) )
	  .catch( (err)  => console.log(err) );
	}
	render() {
    let info = this.state.acctInfo;
    
    return (
      <div>
        <h1>{info ? info.battleTag : "Loading" }</h1>
        <div>{ info ? info.heroes.map( (hero, idx) => <Hero hero={hero} key={idx} acct={info.battleTag} /> ) : null }</div>
      </div>
		);
	}
}
export default Home;