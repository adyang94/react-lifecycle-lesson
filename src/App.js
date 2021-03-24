import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40
    }
    this.mount = () => {
      this.setState({mount: true});
    }
    this.unmount = () => {
      this.setState({mount: false});
    }
    this.ignoreProp = () => {
      this.setState({ignoreProp: Math.random()});
    };
    this.seedGenerator = () => {
      this.setState({seed: Number.parseInt(Math.random() * 100)});
    };
  };

  render () {
    return (
      <div>
        <button onClick={this.mount} disabled = {this.state.mount}>Mount</button>
          {/* These buttons are for mounting and unmounting the component. */}
        <button onClick={this.unmount} disabled = {!this.state.mount}>Unmount</button>
        <button onClick = {this.ignoreProp}>Ignore Prop</button>
        <button onClick = {this.seedGenerator}>Generate Seed</button>
        {this.state.mount ? 
          <Counter 
            ignoreProp = {this.state.ignoreProp}
            seed = {this.state.seed}
          /> : null
        }  
            {/* Ternary operator ^^ */}
        
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))

export default App