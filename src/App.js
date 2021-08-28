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
          id: 22,
        },
        {
          name: "zombie",
          id: 223,
        },
        {
          name: "wolfman",
          id: 2312,
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <CardList name="brian" />
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
