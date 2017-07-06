import React, {Component} from 'react';

class Char extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charData: null
    };
  }
  componentDidMount() {
    let acctInfo =  window.location.pathname
    console.log(acctInfo)

    fetch(`/api${acctInfo}`)
    .then( (data) => data.json())
    .then( (json) => this.setState({charData: json.data}) )
    .catch( (err) => console.log(err) );
  }

  render() {
    return (
      <div>
        <h1>TEST</h1>
      </div>
    );
  }
}

export default Char;