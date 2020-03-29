import React, { Component } from "react";
import "./ColorSquare.css";

const colors = ["#bfcd7e", "#7E57C2", "#EA80FC", "#00BCD4"];

class Color extends Component {
  render() {
    const { color, active, onClick } = this.props;

    const style = {
      backgroundColor: color
    };

    return (
      <div
        className={`Color ${active ? "active" : ""}`}
        style={style}
        onClick={() => onClick(color)}
      />
    );
  }
}

class ColorSquare extends Component {
  render() {
    const { number, selected, changeColor } = this.props;
    const size = {
      width: 200 + 10 * number,
      height: 200 + 10 * number
    };
    return (
      <div className="ColorSquare" style={size}>
        {colors.map(color => {
          return (
            <Color
              key={color}
              color={color}
              active={selected === color}
              onClick={changeColor}
            />
          );
        })}
      </div>
    );
  }
}

export default ColorSquare;
