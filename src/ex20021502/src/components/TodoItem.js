import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  sshouldComponentUpdate(nextProps, nextState) {
    if (this.props.todo !== nextProps.todo) {
      return true;
    } else return false;
  }

  render() {
    const { todo, onCheck, onRemove } = this.props;

    return (
      <div
        className={`TodoItem ${todo.check === true && "active"}`}
        onClick={() => onCheck(todo.id)}
      >
        <div className="check">&#10004;</div>
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation();
            onRemove(todo.id);
          }}
        >
          [지우기]
        </div>
        <div className="text">{todo.text}</div>
      </div>
    );
  }
}

export default TodoItem;
