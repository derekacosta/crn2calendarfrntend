import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfClasses from './courseList.js';

class App extends Component {
  constructor(props) {
    super(props);
      this.updateState = this.updateState.bind(this);
      this.state = {
          activeElements: [<ListOfClasses />, <button onClick={this.updateState}>Finished!</button>],
          inactiveElements: []
      }
  }
  render() {
    return (
      <div className="App">
          {this.state.activeElements.map(element => element)}
      </div>
    );
  }

  updateState(){
    let nextState = this.state;
    nextState.inactiveElements.push(nextState.activeElements.pop());
    nextState.inactiveElements.push(nextState.activeElements.pop());
    nextState.activeElements.push(<div>Hello World</div>);
    this.setState(nextState);
  }
}

export default App;
