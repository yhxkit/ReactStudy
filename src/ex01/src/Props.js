import React, { Component } from "react";

class Props extends Component {
  render() {
    console.log("부모 컴포넌트가 변하면 자식도 같이 변함~");
    return <div>HI~, {this.props.testname}</div>;
  }
}

export default Props;
