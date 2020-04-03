import React, { Component } from "react";

import { connect } from "react-redux";
import { changeColor } from "../store/modules/counter";
import ColorSquare from "../components/ColorSquare";

import ColorList from "../components/ColorList";

class ColorSquareContainer extends Component {
  render() {
    const { number, color, changeColor } = this.props;
    return (
      <ColorSquare number={number} selected={color} changeColor={changeColor} />
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
  color: state.counter.color
});

const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeColor(color))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorSquareContainer);
