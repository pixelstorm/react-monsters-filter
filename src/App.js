import React, { Component } from "react";
import { CardList } from "./components/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "trevor",
          id: 1,
        },
        {
          name: "zombie",
          id: 2,
        },
        {
          name: "wolfman",
          id: 3,
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
