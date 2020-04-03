import React, { Component } from "react";
import "./ColorList.css";

class ColorInput extends Component {
  render() {
    const { color, input, changeInput, update } = this.props;

    return (
      <div>
        <form
          className="ColorList"
          onSubmit={e => {
            e.preventDefault();
            update(color, input);
          }}
        >
          <input onChange={str => changeInput(str)} placeholder={color} />
        </form>
      </div>
    );
  }
}

export default ColorInput;
