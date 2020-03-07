import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import rootReducer from "./store/modules";

import { Provider } from "react-redux"; //이제 리덕스 스토어를 리액트앱과 연결해보자~

// const store = createStore(); //그냥 이렇게 짜면 오류가 난다....스토어안에는 리듀서가 필요하기 때문에..
//만들어야 할 것 : 액션, 스테이트(스토어안에 들어갈 상태값), 리듀서(상태값을 어떻게 변화시킬것인가)
// 공식 문서에서는 액션 스테이트, 리듀서를 각각의 파일에 생성하는데, ducks 를 이용하여 한 파일에 묶어서 작성한다

const store = createStore(
  rootReducer, //스토어 생성~
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // 크롬에 리덕스 개발자 도구가 있으면 실행하도록~

// console.log(store.getState());
// 리덕스 개발자 도구를 이용해 콘솔로그에서 벗어나보자~

ReactDOM.render(
  //</Provider>로 리액트 앱을 감싸면 됨
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
