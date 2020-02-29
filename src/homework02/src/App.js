import React, { Component } from "react";
import "./App.css";

import CreateForm from "./components/CreateForm";
import TodoList from "./components/TodoList";

import produce from "immer";

class App extends Component {
  state = {
    todos: []
  };

  id = 0;

  type = {
    typename: "Alarm",
    count: 1,
    countStr: "1번의 알람을 설정합니다",
    gap: 1,
    max: 3,
    min: 1
  };

  //   type = {
  //     typename: "SONG",
  //     grade: 0,
  //     gradeStr: "",
  //     gap: 1,
  //     max: 5,
  // 	min: 0
  //   };

  handleCreate = text => {
    this.setState(
      produce(draft => {
        draft.todos.push({
          id: ++this.id,
          text: text,
          check: false,
          type: this.type
        });
      })
    );
  };

  handleCheck = id => {
    this.setState(
      produce(draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.check = !todo.check;
      })
    );
  };

  handleRemove = id => {
    this.setState(
      produce(draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1);
      })
    );
  };

  handleIncrease = id => {
    this.setState(
      produce(draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.type.count =
          todo.type.count + todo.type.gap > todo.type.max
            ? todo.type.max
            : todo.type.count + todo.type.gap;
        if (todo.type.typename === "SONG") {
          todo.type.countStr = "★".repeat(todo.type.count);
        } else {
          todo.type.countStr = todo.type.count + "번의 알람을 설정합니다";
        }
      })
    );
  };

  handleDecrease = id => {
    this.setState(
      produce(draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.type.count = todo.type.count =
          todo.type.count - todo.type.gap < todo.type.min
            ? todo.type.min
            : todo.type.count - todo.type.gap;
        if (todo.type.typename === "SONG") {
          todo.type.countStr = "★".repeat(todo.type.count);
        } else {
          todo.type.countStr = todo.type.count + "번의 알람을 설정합니다";
        }
      })
    );
  };

  render() {
    return (
      <div className="App">
        <h3>TODO LIST</h3>
        <CreateForm onCreate={this.handleCreate} type={this.type} />
        <TodoList
          todos={this.state.todos}
          onCheck={this.handleCheck}
          onRemove={this.handleRemove}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
        />
      </div>
    );
  }
}

export default App;
