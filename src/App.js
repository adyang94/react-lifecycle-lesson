import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      mount: true,
      ignoreProp: 0
    }
    this.mount = () => {
      this.setState({mount: true});
    }
    this.unmount = () => {
      this.setState({mount: false});
    }
    this.ignoreCase = () => {
      this.setState({ignoreProp: Math.random()});
    };
  };

  render () {
    return (
      <div>
        <button onClick={this.mount} disabled = {this.state.mount}>Mount</button>
          {/* These buttons are for mounting and unmounting the component. */}
        <button onClick={this.unmount} disabled = {!this.state.mount}>Unmount</button>
        
        {this.state.mount ? <Counter ignoreCase = {this.state.ignoreProp}/> : null}  
          {/* Ternary operator ^^ */}
        
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))

export default App