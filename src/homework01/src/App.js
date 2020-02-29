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

  isSafe = (un, pw) => {
    console.log(un);
    console.log(pw);

    if (pw.length >= 6 && !pw.includes(un)) {
      return true;
    } else {
      return false;
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
            onChange={e => {
              this.handleChange(e);
            }}
            value={this.state.password}
          ></input>
          <button
            type="submit"
            disabled={!this.isSafe(this.state.username, this.state.password)}
            //버튼에 isSafe를 달아서 바로 실행하도록 () 해주면 setState가 밀리지 않는다!
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default App;
