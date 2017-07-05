import React, { Component } from 'react';

class Home extends Component () {
	componentDidMount() {
	  fetch('/account')
	  .then(  (data) => data.json() )
	  .then(  (json) => console.log(json) )
	  .catch( (err)  => console.log(err) );
	}
	render() {
		return (
			<h1>Hello</h1>
		);
	}
}
export default Home;