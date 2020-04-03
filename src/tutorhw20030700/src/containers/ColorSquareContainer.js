import React, { Component } from "react";

import { connect } from "react-redux";
import { changeColor } from "../store/modules/counter";
import ColorSquare from "../components/ColorSquare";

import * as colorInputActions from "../store/modules/colorInput";
import ColorInput from "../components/ColorInput";

class ColorSquareContainer extends Component {
  render() {
    const {
      number,
      color,
      changeColor,
      input,
      changeInput,
      update,
      colors
    } = this.props;
    return (
      <div>
        <ColorSquare
          number={number}
          selected={color}
          changeColor={changeColor}
          colors={colors}
        />
        <ColorInput
          color={color}
          input={input}
          changeInput={changeInput}
          update={update}
        />
      </div>
    );
  }
}

// const mapStateToProps = ({ counter: { number, color } }) => ({
//   //이렇게 단순화 시킬수있는데 보기 힘들어서 잘 안한다고
//   number,
//   color
// });
const mapStateToProps = state => ({
  number: state.counter.number,
  color: state.counter.color,

  input: state.colorInput.input,
  colors: state.colorInput.colors
});

const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeColor(color)),

  changeInput: el => dispatch(colorInputActions.changeInput(el)),
  update: (color, input) => dispatch(colorInputActions.update(color, input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorSquareContainer);
