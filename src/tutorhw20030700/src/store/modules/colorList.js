import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "colorList/CHANGE_INPUT";
const INSERT = "colorList/INSERT";
const UPDATE = "colorList/UPDATE";
const REMOVE = "colorList/REMOVE";

let id = 1;

export const changeInput = createAction(CHANGE_INPUT, input => input);
export const insert = createAction(INSERT, color => ({
  color: color,
  id: id++
}));
export const update = createAction(UPDATE, id => id);
export const remove = createAction(REMOVE, id => id);
const initialState = {
  input: "",
  list: []
};

const colorList = handleActions(
  {
    [CHANGE_INPUT]: (state = initialState, action) => ({
      ...state,
      input: action.payload.target.value
    }),
    [INSERT]: (state = initialState, action) => ({
      ...state,
      list: state.list.concat(action.payload)
    }),
    [REMOVE]: (state = initialState, action) => ({
      ...state,
      list: state.list.filter(item => item.id !== action.payload)
    }),
    [UPDATE]: (state = initialState, action) => ({
      ...state,
      list: state.list.map(item =>
        item.id === action.payload.id ? action.payload : item
      )
    })
  },
  initialState
);

export default colorList;
