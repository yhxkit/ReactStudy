import React, { Component } from "react";
import "./App.css";
// import Counter from './components/Counter';
import ColorList from "./components/ColorList";
// import ColorSquare from "./components/ColorSquare";
import CounterContainer from "./containers/CounterContainer"; /// import Counter from './components/Counter'; 대신 가져옴... 버블링 때문에
import ColorSquareContainer from "./containers/ColorSquareContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
        <ColorSquareContainer />
        <ColorList />
      </div>
    );
  }
}

export default App;
