import React, { Component } from "react";

class App extends Component {
  state = {
    username: "",
    password: "",
    disabled: true
  };

  usernameFocus = React.createRef();

  handleChange = e => {
    const { name, value } = e.target;

    const update = {};
    update[name] = value;

    this.setState({
      [name]: value
    });
  };

  isSafe = e => {
    this.handleChange(e);

    const { username, password } = this.state;

    console.log(password);

    if (password.length > 4 && !password.includes(username)) {
      this.setState({
        disabled: false
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    alert("로그인");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            ref={this.usernameFocus}
          ></input>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={e => {
              // this.handleChange(e);
              this.isSafe(e);
            }}
          ></input>
          <button type="submit" disabled={this.state.disabled}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default App;
