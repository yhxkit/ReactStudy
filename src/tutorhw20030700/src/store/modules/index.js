// 모듈이 많아서 리듀서가 엄청 많아지니까 여기서 한번 합친 다음에 createStore에 한번에 넣어줄것임
import { combineReducers } from "redux"; //리듀서를 합쳐주는 함수를 리덕스에서 가져옴

import counter from "./counter";

export default combineReducers({
  //여기서 합쳐줄 리듀서들작성
  counter
});
