import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "colorList/CHANGE_INPUT";
const INSERT = "colorList/INSERT";
const UPDATE = "colorList/UPDATE";
const REMOVE = "colorList/REMOVE";

// export const changeInput = input => ({ type: CHANGE_INPUT, input: input });
// export const changeInput = input => ({ type: CHANGE_INPUT, payload: input }); flux 아키텍처에서는 무조건 payload로 받음...일일이 input인지 color인지 확인 x

let id = 1;

export const changeInput = createAction(CHANGE_INPUT, input => input);
export const insert = createAction(INSERT, color => ({
  color: color,
  id: id++
})); // insert("입력") === {type:INSERT, payload: {color:'입력', id: 1}} // 이렇게 반환되는 것
export const update = createAction(UPDATE, id => id);
export const remove = createAction(REMOVE, id => id);
const initialState = {
  input: "",
  list: []
};
export default handleActions(
  //이거 숙제로 해보래.. 이거랑 라우터 리팩토링도 과제~
  {
    [CHANGE_INPUT]: (state, action) => ({}),
    [INSERT]: (state, action) => ({})
  },
  initialState
);
