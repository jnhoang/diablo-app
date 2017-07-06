import React, {Component} from 'react';

class Char extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charData: null
    };
  }
  componentDidMount() {
    let acctInfo =  window.location.pathname;
    console.log(acctInfo);

    fetch(`/api${acctInfo}`)
    .then( (data) => data.json())
    .then( (json) => this.setState({charData: json.data}) )
    .catch( (err) => console.log(err) );
  }

  render() {
    let charData = this.state.charData;

    return (
      <div>
      {charData &&
        <div>
          <h1>Basic Info</h1>
          <p>{charData.name}</p>
          <p>{charData.class}</p>
          <p>{charData.level}</p>
          <p>{charData.gender === 0 ? "Male" : "Female"}</p>
          <p>{char.paragonLevel}</p>
        </div>
      }
        <h1>Skill section</h1>

        <h1>Item Section</h1>

        <h1>followers Section</h1>

        <h1>Stat section</h1>
      </div>
    );
  }
}

export default Char;