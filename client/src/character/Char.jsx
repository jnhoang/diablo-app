import React, {Component}     from 'react';
import ActiveSkill            from './components/ActiveSkill';
import BasicInfo              from './components/BasicInfo';
import Follower               from './components/Follower';
import Items                   from './components/Items';
import PassiveSkill           from './components/PassiveSkill';
import Stats                  from './components/Stats';

class Char extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charData   : null
    , followers  : null
    , charItems  : null
    };
  }
  componentDidMount() {
    let acctInfo =  window.location.pathname;

    fetch(`/api${acctInfo}`)
    .then( (data) => data.json() )
    .then( (json) => {
      
      // Copy follower data into Arr
      let followersArr = formatObjToArr(json.data.followers);

      // filter empty skills
      json.data.skills.passive = json.data.skills.passive.filter( (skill) => JSON.stringify(skill) !== '{}' );
      json.data.skills.active  = json.data.skills.active.filter(  (skill) => JSON.stringify(skill) !== '{}' );

      this.setState({
        charData: json.data
      , followers: followersArr
      });
    })
    .catch( (err) => console.log(err) );
  }

  render() {
    let char = this.state.charData;
    
    return (
      <div>
        {!char ? <h1>Loading</h1> : 
          <div>
            <h1>Progression to go here</h1>

            <BasicInfo data={char} />
            <Stats data={char.stats} />
            
            <h1>Skill section</h1>
            { char.skills.active.map(  (skill) => <ActiveSkill  data={skill} key={skill.skill.slug} /> )}
            { char.skills.passive.map( (skill) => <PassiveSkill data={skill} key={skill.skill.slug} /> )}
            
            <h1>Item Section</h1>
            {char.items && <Items data={char.items} />}

            <h1>followers Section</h1>
            { this.state.followers.map( (follower) => <Follower data={follower} key={follower.slug} /> )}
          </div>
        }
      </div>
    );
  }
}

export default Char;

function formatObjToArr(obj) {
  let retArr = [];

  for (let item in obj) {
    retArr.push(obj[item]);
  }

  return retArr;
}