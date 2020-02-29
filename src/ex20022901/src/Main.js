//rcc =클래스형 컴포넌트
//rsc = 함수형 컴포넌트 react statelessc component
// hook 도 생김.. this 가 없어짐

// import React, { Component } from "react";

// class Main extends Component {
//   render() {
//     return <div></div>;
//   }
// }

// export default Main;
//이렇게 하던걸 함수형 컴포넌트로 변경 가능. hook이 나왔기때문에 함수형 컴포넌트 권장.. 16.8.~~ 부터 함수형이 나옴

import React from "react";

const Main = () => {
  return (
    <div>
      <h1>Main page</h1>
    </div>
  );
};

export default Main;
