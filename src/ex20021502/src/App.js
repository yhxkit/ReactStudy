import React, { Component } from "react";
import "./App.css";

import CreateForm from "./components/CreateForm";
import TodoList from "./components/TodoList";

const createBulkTodos = (() => {
  //성능테스트용으로 앱 시작시 많은 수의 투두를 넣어보자
  const bulkTodos = [];
  for (let i = 0; i < 100; i++) {
    bulkTodos.push({
      id: i,
      text: `Todos ${i}`,
      check: false
    });
  }
  return bulkTodos;
})();

class App extends Component {
  state = {
    todos: createBulkTodos
  };

  id = 1;

  handleCreate = text => {
    this.setState({
      todos: this.state.todos.concat({ text: text, check: false, id: this.id })
    });
    this.id++;
    // this.setState(state => { 와 같이 함수형으로 셋스테이트가능})
  };

  handleCheck = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            check: !todo.check
          };
        } else {
          return todo;
        }
      })
    });
  };

  handleRemove = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    return (
      <div className="App">
        <h3>TODO LIST</h3>
        <CreateForm onCreate={this.handleCreate} />
        <TodoList
          todos={this.state.todos}
          onCheck={this.handleCheck}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
