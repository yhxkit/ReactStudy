import React, { Component } from "react";
import "./CreateForm.css";

class CreateForm extends Component {
  state = {
    input: ""
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state.input); // app.js의 onCreate에 input 넘겨줌.. 즉 자식이 부모를 호출.
    //그리고 input은 초기화
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <div className="CreateForm">
        <form className="form_container" onSubmit={this.handleSubmit}>
          <input
            name="input"
            value={this.state.input}
            placeholder="something to do?"
            onChange={this.handleChange}
          />
          <button type="submit">추가</button>
        </form>
      </div>
    );
  }
}

export default CreateForm;
