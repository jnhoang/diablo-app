import React, { Component }  from 'react';
import Hero                  from './components/Hero';

import './Home.css'

class Home extends Component {
	constructor(props) {
    super(props);

    this.state = {
      acctInfo: null
    , battleTag: 'Enter your battleTag'
    };
  } 
  handleInput(e) {
    this.setState({ battleTag: e.target.value });
  }
  handleSubmit() {
	  fetch(`/api/account/${this.state.battleTag}`)
	  .then(  (data) => data.json() )
	  .then(  (json) => this.setState({ acctInfo: json.data }) )
	  .catch( (err ) => console.log(err) );
  }
	render() {
    let info = this.state.acctInfo;
    
    return (
      <div>
        <input 
          type="text"
          value={this.state.formInput}
          onChange={ (e) => this.handleInput(e) } 
        />
        <button onClick={ () => this.handleSubmit() }>Find</button>

        {this.state.battleTag ? null : this.state.battleTag}
        
        {!info ? null :
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