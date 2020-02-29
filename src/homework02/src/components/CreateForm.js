import React, { Component } from "react";
import "./CreateForm.css";

class CreateForm extends Component {
  state = {
    input: "",
    type: {}
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state.input);
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
            placeholder={
              "AEIOUYaeiouy".includes(this.props.type.typename.slice(0, 1))
                ? `add an ${this.props.type.typename}`
                : `add a ${this.props.type.typename}`
            }
            onChange={this.handleChange}
          />
          <button type="submit">추가</button>
        </form>
      </div>
    );
  }
}

export default CreateForm;
