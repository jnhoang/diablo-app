import React, {Component} from 'react';

const styles = {
  content: {
    textAlign   : 'center'
  , fontSize    : '35px'
  }
}

class Loading extends Component {
  constructor(props){
    super(props)

    this.state = {
      text      : props.text
    , speed     : props.speed
    }

    // private variables
    this.deregisterAnimationInterval = null
  
  }

  componentDidMount(){
    this.setAnimationInterval()
  }

  componentWillUnmount() {
    this.clearAnimationInterval()
  }

  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }


  // private functions
  setAnimationInterval() {
    this.deregisterAnimationInterval = window.setInterval( () => {
      this.state.text === this.props.text + '...'
        ? this.setState({ text: this.props.text })
        : this.setState({ text: this.state.text + '.' }) 
    }, this.props.speed)
  }
  clearAnimationInterval() {
    return window.clearInterval(this.deregisterAnimationInterval)
  }

}

export default Loading;