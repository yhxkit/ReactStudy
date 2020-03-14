import React, { Component } from "react";
import { connect } from "react-redux";

// import { changeInput, insert } from "./store/modules/form";
import * as FormActions from "./store/modules/form";

import { bindActionCreators } from "redux";

class App extends Component {
  handleChange = e => {
    const { value } = e.target;
    // this.props.changeInput(value);
    this.props.formActions.changeInput(value);
  };

  handleSubmit = e => {
    e.preventDefault();

    // const { changeInput, insert, input } = this.props;
    const { formActions, input } = this.props;

    formActions.insertAsync(input);
    formActions.changeInput("");
  };

  render() {
    const { input, list } = this.props;

    return (
      <div>
        <form action="">
          <input value={input} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>입력</button>
        </form>
        {list.map(item => {
          return <div key={item.id}>{item.text}</div>;
        })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  formActions: bindActionCreators(FormActions, dispatch)
});

// export default connect(
//   ({ form: { input, list } }) => ({
//     input,
//     list
//   }),
//   {
//     changeInput,
//     insert
//   }
// )(App);
export default connect(
  ({ form: { input, list } }) => ({
    input,
    list
  }),
  mapDispatchToProps
)(App);
