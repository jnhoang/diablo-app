import React, {Component} from 'react';
import ActiveSkill from './components/ActiveSkill';

class Char extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charData   : null
    , charItems  : null
    };
  }
  componentDidMount() {
    let acctInfo =  window.location.pathname;

    fetch(`/api${acctInfo}`)
    .then( (data) => data.json() )
    .then( (json) => this.setState({charData: json.data}) )
    .catch( (err) => console.log(err) );
  }

  render() {
    let char = this.state.charData;
    let items = []
    return (
      <div>
        {char &&
          <div>
            <h1>Basic Info</h1>
            <p>{char.name}</p>
            <p>{char.class}</p>
            <p>{char.level}</p>
            <p>{char.gender === 0 ? "Male" : "Female"}</p>
            <p>{char.paragonLevel}</p>
          </div>
        }
        {char && 
          <div>
            <h1>Skill section</h1>
            {char.skills.active.map( (skill, idx) => <ActiveSkill data={skill} key={idx} /> )}
          </div>
        }

        <h1>Item Section</h1>

        <h1>followers Section</h1>

        <h1>Stat section</h1>
      </div>
    );
  }
}

export default Char;