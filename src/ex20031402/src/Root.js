import React from "react";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/modules";
import { composeWithDevTools } from "redux-devtools-extension";

import ReduxThunk from "redux-thunk";

const Root = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  );
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default Root;
