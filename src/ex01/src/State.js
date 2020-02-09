import React, { Component } from "react";

class State extends Component {
  state = {
    number: 0
  };
  //원래는 컨스트럭터를 사용해서 작성했는데...이건 옛날 문법이라.. 바로 state로 작성가능하게
  //   constructor(props){
  //   super(props);
  //   this.state={
  //       number: 0
  //   }
  // }

  // state를 바꾸는 애들은 렌더밖에서 작성해야 함
  //const let 이런게 필요가 없음 밖에서 작성하는건
  handleIncrease = () => {
    this.setState({
      //객체를 변화 시킴
      number: this.state.number + 1
    });
  };

  handleDecreae = () => {
    this.setState({
      // 무조건 setState를 통해서 state를 변경해야한다
      //this.state.number = this.state.number -1 로 하면 불변성에 문제가 생기므로 절대 쓰지 말것
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleIncrease}>
          1씩 더해봅시다(여기 온클릭에서 바로 ()로 호출하면 스택 오버 플로우)
        </button>
        <button onClick={this.handleDecreae}>1씩 줄여봅니다</button>
      </div>
    );
  }
}

export default State;
