import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.todo !== nextProps.todo) {
      return true;
    } else return false;
  }

  render() {
    const { todo, onCheck, onRemove, onIncrease, onDecrease } = this.props;
    return (
      <div className="TodoItem">
        <div
          className="check"
          onClick={e => {
            e.stopPropagation();
            onCheck(todo.id);
          }}
        >
          &#10004;
        </div>
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation();
            onRemove(todo.id);
          }}
        >
          [X]
        </div>
        <div
          className="increase"
          onClick={e => {
            e.stopPropagation();
            onIncrease(todo.id);
          }}
        >
          [+]
        </div>
        <div
          className="decrease"
          onClick={e => {
            e.stopPropagation();
            onDecrease(todo.id);
          }}
        >
          [-]
        </div>
        <div className="grade">{todo.type.countStr}</div>
        <div className="text">{todo.text}</div>
      </div>
    );
  }
}

export default TodoItem;
