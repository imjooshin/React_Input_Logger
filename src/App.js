import React, { Component } from 'react';
import './App.css';

class App extends Component {
  changeHandler = (evt) => {
    console.log(evt.target.value);
  }
  logger = () => {
    var x = document.getElementById("logger");
    console.log(x.value);
  }

  render() {
    return (
      <div className="App">
        <h1>Input Logger</h1>
        <p><input type="text" id="logger" onKeyUp={this.logger}></input></p> 
        <p><input type="text" onChange={this.changeHandler}></input></p>
      </div>
    );
  }
}

export default App;
