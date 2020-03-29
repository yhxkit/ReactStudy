//컴포넌트가 아니라 함수라서 그냥 소문자로 시작한다
//https://github.com/erikras/ducks-modular-redux

//ACTION은 대문자로 쓴다
const INCREMENT = "counter/INCREAMENT";
const DECREMENT = "counter/DECREMENT";

const CHANGE_COLOR = "counter/CHANGE_COLOR";

//ACTION CREATORS 액션 생성 함수..... {type: INCREMENT} 이런식으로 받도록
export const increment = number => ({ type: INCREMENT, number: number });
export const decrement = () => ({ type: DECREMENT });

export const changeColor = color => ({ type: CHANGE_COLOR, color: color });

//예시 button onClick= {() =>store.dispatch({type: 'counter/INCREMENT'})}

//스토어안에서 관리할 상태값
const initialState = {
  number: 0,
  color: "#bfcd7e"
};

//리듀서
export default function counter(state = initialState, action) {
  //리듀서이름은 파일명과 동일... state와 action을 무조건 인자로 받아야 함 외울것!
  switch (action.type) {
    case INCREMENT:
      return { ...state, number: state.number + action.number };
    case DECREMENT:
      return { ...state, number: state.number - 1 };
    case CHANGE_COLOR:
      return { ...state, color: action.color };
    default:
      return state;
  }
}

// export default 와 export ...
// default는 아무 이름으로나 가져와도 됨 ...import 아무이름 from './counter' 식으로
// export는 객체타입으로 정해진 이름으로만 import {정해진 이름} from './counter'
