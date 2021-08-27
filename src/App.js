import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "hello",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <p>{this.state.string}</p>
        <button onClick={() => this.setState({ string: "hello Dan" })}>
          Change Text
        </button>
      </div>
    );
  }
}

export default App;
