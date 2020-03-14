import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/modules";
import { Provider } from "react-redux";

import middleware from "./middleware";
import ReduxThunck from "redux-thunk";

const store = createStore(
  rootReducer,
  applyMiddleware(middleware, ReduxThunck) //내가 만든 미들웨어(콘솔에 찍는용)와 Thunk를 스토어에 리듀서와 함꼐  미들웨어로적용
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
