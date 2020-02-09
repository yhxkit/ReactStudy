import React, { Component, Fragment } from "react";
import Props from "./Props";

class App extends Component {

  componentDidMount() {
    console.log("렌더후 마운트되면 단 한번");
  }

  componentDidUpdate() {
    console.log("리렌더링될때마다");
  }

  render() {
    //여기가 js의 자리
    const name = "REACT";
    const one = 1;
    let val = 10;
    function test() {
      if (one === 1) {
        return "def";
      } else {
        return "abc";
      }
    }

    if (true) {
      val = 100;
    }

    const nn = "prop을 사용해봅시다? ";

    return (
      <Fragment>
        <Props testname={nn} />
        <div>{val}</div>
        <div> {test()}</div>
        <div> hello {name}</div>
        <div>Hello World</div>
        <div>Hello World2</div>
      </Fragment>
    );
  }
}

// 항상 내보내줘야 index.js 에서 받아와서 사용
export default App;
