import { createAction, handleActions } from "redux-actions";

//action
const CHANGE_INPUT = "auth/CHANGE_INPUT";
const RESET_FORM = "auth/RESET_FORM";

//action creators
export const changeInput = createAction(
  CHANGE_INPUT,
  ({ type, key, value }) => ({ type, key, value }) //login과 register 중 어디껄로 받아야할지 type, 키 밸류
);
export const resetForm = createAction(RESET_FORM, type => type);

//초기값.. initialSTATE
const initialState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: ""
  },
  login: {
    username: "",
    password: ""
  },
  loading: false,
  data: null,
  error: null
};

//reducer
export default handleActions({
  [CHANGE_INPUT]: (state, action) => ({
    ...state,
    [action.payload.type]: {
      ...state[action.payload.type],
      [action.payload.key]: action.payload.value
    }
  }),
  [RESET_FORM]: (state, action) => ({
    ...state,
    // [action.payload]: initialState.register
    [action.payload]: initialState[action.payload]
  }),
  [REGISTER_LOADING]: (state, action) => ({
    ...state,
    loading: action.payload,
    error: null
  }),
  [REGISTER_SUCCESS]: (state, action) => ({
    ...state,
    data: action.payload,
    loading: false
  }),
  [REGISTER_FALURE]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  })
});
