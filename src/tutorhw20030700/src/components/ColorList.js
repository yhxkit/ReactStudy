import React, { Component } from "react";
import "./ColorList.css";

class ColorList extends Component {
  render() {
    const { input, list, changeInput, update, remove, insert } = this.props;

    return (
      <div>
        <form className="ColorList">
          <input
            onChange={() => changeInput(1)}
            placeholder="원하는 색을 입력하세요"
          />
        </form>
      </div>
    );
  }
}

export default ColorList;
