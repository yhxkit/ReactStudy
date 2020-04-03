import React, { Component } from "react";

import { connect } from "react-redux";
import * as colorListActions from "../store/modules/colorList";

import ColorList from "../components/ColorList";

class ColorListContainer extends Component {
  render() {
    const { input, list, changeInput, update, remove, insert } = this.props;
    return (
      <ColorList
        input={input}
        list={list}
        changeInput={changeInput}
        update={update}
        remove={remove}
        insert={insert}
      />
    );
  }
}

const mapStateToProps = state => ({
  input: state.colorList.input,
  list: state.colorList.list
});

const mapDispatchToProps = dispatch => ({
  changeInput: el => dispatch(colorListActions.changeInput(el)),
  insert: el => dispatch(colorListActions.insert(el)),
  update: el => dispatch(colorListActions.update(el)),
  remove: el => dispatch(colorListActions.remove(el))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorListContainer);
