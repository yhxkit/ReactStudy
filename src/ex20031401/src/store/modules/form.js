import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "form/CHANGE_INPUT";
const INSERT = "form/INSERT";

let id = 1;
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const insert = createAction(INSERT, text => ({ text, id: id++ }));

//예를 들어 insert('helloWorld')했을 경우 반환값이 오브젝트면 리덕스에게 넘기고 펑션이면 미들웨어가 처리... Thunk의 기준은 그럼
//예시 오브젝트 {type: 'form/INSERT', payload: {text: 'helloWorld', id: 1}}

//insert thunk
export const insertAsync = input => dispatch => {
  setTimeout(() => {
    dispatch(insert(input));
  }, 1000); //1초뒤에 인서트하고 디스패치 작업
};

const initialState = {
  input: "",
  list: []
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({
      ...state,
      input: action.payload
    }),
    [INSERT]: (state, action) => ({
      ...state,
      list: state.list.concat({
        id: action.payload.id,
        text: action.payload.text
      })
    })
  },
  initialState
);
