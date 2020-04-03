import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "colorInput/CHANGE_INPUT";
const UPDATE = "colorInput/UPDATE";
export const changeInput = createAction(CHANGE_INPUT, input => input);
export const update = createAction(UPDATE, (color, input) => ({
  color: color,
  input: input
}));

const initialState = {
  input: "",
  colors: ["#bfcd7e", "#7E57C2", "#EA80FC", "#00BCD4"]
};

const colorInput = handleActions(
  {
    [CHANGE_INPUT]: (state = initialState, action) => ({
      ...state,
      input: action.payload.target.value
    }),
    [UPDATE]: (state = initialState, action) => ({
      ...state,
      colors: state.colors.map(item =>
        item === action.payload.color ? action.payload.input : item
      )
    })
  },
  initialState
);

export default colorInput;
