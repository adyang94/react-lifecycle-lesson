import React from 'react';



export default class Counter extends React.Component {
  constructor (props) {
    console.log('Constructor');
    super(props); // super allows us to refer to props using this.props

    this.state = {
      counter: 0,
      seed: 0
    };

    this.increment = () => {
      this.setState({counter: this.state.counter + 1})
    }
    this.decrement = () => {
      this.setState({counter: this.state.counter - 1})
    }
  }

  static getDerivedStateFromProps (props, state) {
    if(props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      }
    }
    return null
  }

  componentDidMount () { 
    // only shows up when component mounts.  Does not mount after rending
    console.log('Component did mount');
    console.log('----------------');
  }

  shouldComponentUpdate (nextProps, nextState) {
    // Takes two parameters
    // Normally, React will determine if component should update but this can be controlled if needed.
    if (nextProps.ignoreProp && this.props.ignoreProp !== nextState.ignoreProp) {
      console.log("Should component update - no render");
      return false
    }
    console.log("Should component update - render");
    return true
  }

  getSnapshotBeforeUpdate (prevProps, prevState){
    // Happens before render.  Parameters are previous prop and prveState.
    console.log('Get snapshot before update.')
    return null
    // This is what is being sent to ' component Did Update.
    
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
  componentDidCatch (error, info) {
    console.log("Component did catch");
    
  }
}