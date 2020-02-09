import React, { Component } from "react";


class Style extends Component {
  render() {
    const divStyle = {
      backgroundColor: "red"
    }
    return (
      <div>
        <h1 style={divStyle}>aaa</h1>
        <h1 style={{ backgroundColor: "blue" }}>스타일은 객체이다..</h1>
      </div>
    );
  }
}

export default Style;
