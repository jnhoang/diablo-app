import React, {Component}     from 'react';
import ActiveSkill            from './components/ActiveSkill';
import BasicInfo              from './components/BasicInfo';
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
           
            <h1>Stat section</h1>
            <Stats data={char.stats} />
            
            <h1>Skill section</h1>
            { char.skills.active.map( (skill, idx) => <ActiveSkill data={skill} key={idx} /> )}
            <p>passive skills go here</p>

            
            <h1>Item Section</h1>

            <h1>followers Section</h1>
            {this.state.followers ? this.state.followers[0].slug : null}
          </div>
        }
      </div>
    );
  }
}

export default Char;

function formatObjToArr(obj) {
  let retArr = [];

  for (let person in obj) {
    retArr.push(obj[person]);
  }

  return retArr;
}