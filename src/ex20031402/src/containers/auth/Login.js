import React, { Component } from "react";
//스토어와 연결하기 위해 커넥트부터
import { connect } from "react-redux";

//authmodal 보여주기 위해
import AuthModal from "../../components/auth";

//액션생성함수
import { changeInput, resetForm } from "../../store/modules/auth";

class Login extends Component {
  //컨테이너 컴포넌트에서 작성해서 프레젠테이셔널 컴포넌트에 ㅐ내려주자
  handleChange = e => {
    const { name, value } = e.target;
    const { changeInput } = this.props;
    changeInput({ type: "login", key: name, value: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    //나중에
  };
  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <AuthModal type="login" onChange={handleChange} onSubmit={handleSubmit} />
    );
  }
}

const mapStateToProps = state => ({ register: state.auth.login });
const mapDispatchToProps = { changeInput, resetForm };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
