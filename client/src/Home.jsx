import React, { Component }  from 'react';
import Hero                  from './components/Hero';

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
        {!info ? <h1>Loading</h1> :
          <div>
            <h1>{info.battleTag}</h1>
            <div>{info.heroes.map( (hero, idx) => <Hero hero={hero} key={idx} acct={info.battleTag} /> )}</div>
          </div>
        }
      </div>
		);
	}
}
export default Home;