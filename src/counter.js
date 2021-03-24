import React from 'react';

export default class Counter extends React.Component {
  constructor (props) {
    console.log('Constructor');
    super(props); // super allows us to refer to props using this.props

    this.state = {
      counter: 0
    };

    this.increment = () => {
      this.setState({counter: this.state.counter + 1})
    }
    this.decrement = () => {
      this.setState({counter: this.state.counter - 1})
    }
  }

  componentDidMount () { 
    // only shows up when component mounts.  Does not mount after rending
    console.log('Component did mount');
    console.log('----------------');
  }

  shouldComponentUpdate (nextState, nextProps) {
    // Takes two parameters
    // Normally, React will determine if component should update but this can be controlled if needed.
    return true
  }
  
  render () {
    console.log('Render');

    return (
      <div>
        <button onClick = {this.increment}>Increment</button>
        <button onClick = {this.decrement}>Decrement</button>
        <div className="counter">
          Counter: {this.state.counter}
        </div>
      </div>
    )
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    // This only runs when the state is changed AND after it's been updated.
    // Takes 3 parameters.
    console.log('component did update');
    console.log('--------------')
  }
}