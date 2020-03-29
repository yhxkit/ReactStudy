import React, { Component } from "react";

import { connect } from "react-redux"; //리액트 리덕스에서 커넥트를 가져와서 리액트 앱과 스토어를 이어보자
//Higher Order Component
//19년 2월에 나온 hook으로 대체되었는데 일단 설명함 HOC.. 컴포넌트 패턴
// 원래 컴포넌트에 없던 기능을 부여하여 더 기능이 추된 컴포넌트로 만드는 것

// import { increment, decrement } from "../store/modules/counter";
import * as counterActions from "../store/modules/counter";

import Counter from "../components/Counter";

class CounterContainer extends Component {
  render() {
    const { color, number, increment, decrement } = this.props; //mapStateToProps 에서 프롭스에 넘긴 number를 받아옴
    return (
      <Counter
        color={color}
        number={number}
        increment={increment}
        decrement={decrement}
      />
    );
  }
}

const mapStateToProps = state => ({
  //밖에서 만든 스토어에서 스테이트를 가져오는 함수.. 커넥트가 스테이트를 넣어줌
  //이를 위해export default connect(CounterContainer); 를 export default connect(mapStateToProps)(CounterContainer); 로 바꿈
  number: state.counter.number, //전체 스테이트에서 counter.number만 가져와서 number란 이름으로 props로 넘김
  //스토어의 number가 counter 모듈의 이름까지 써놨기 떄문에??? counter.number로 가져온다구....???
  color: state.counter.color
});

const mapDispatchToProps = dispatch => ({
  // increment: number => dispatch(increment(number)), // = dispatch({type: INCREMENT})
  // //스토어에 디스패치 시킴.. 나중에 button OnClick = "increment" 이런식으로 쓰면 디스패치된다고 함
  // decrement: () => dispatch(decrement())

  increment: number => dispatch(counterActions.increment(number)), // = dispatch({type: INCREMENT})
  //스토어에 디스패치 시킴.. 나중에 button OnClick = "increment" 이런식으로 쓰면 디스패치된다고 함
  decrement: () => dispatch(counterActions.decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer); // 뭐가 뭐의 인자로 들어가는건지..
//이렇게CounterContainer를 connect 로 감싸주어서 HOC
