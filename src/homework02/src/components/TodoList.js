import React, { Component } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { todos, onCheck, onRemove, onIncrease, onDecrease } = this.props;
    return (
      <div className="TodoList">
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCheck={onCheck}
              onRemove={onRemove}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
