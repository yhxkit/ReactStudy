//yarn create react-app사용시
//babel, webpack, sass-loader등 다 알아서 해줌

//JSX >> babel로 es6 > es5 > 브라우저에 뿌려줌
//.scss >> sass-loader로 >.css> css-loader > 브라우저에 뿌려줌
// sass-loader는 yarn add node-sass 로 추가해줌...

import React, { Component } from "react";
import "./App.css";

import SassComponent from "./SassComponent";

class App extends Component {
  render() {
    return <SassComponent />;
  }
}

export default App;
