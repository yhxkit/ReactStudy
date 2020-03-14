import { createAction, handleActions } from "redux-actions";
import axios from "axios";
//action
const CHANGE_INPUT = "auth/CHANGE_INPUT";
const RESET_FORM = "auth/RESET_FORM";

//thunk내부에서 쓸 액션
const REGISTER_LOADING = "auth/REGISTER_LOADING"; // 여기는 순수함 api호출만 순수하지 않음
const REGISTER_FAILURE = "auth/REGISTER_FAILURE";
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";

// export const registerLoading = createAction(REGISTER_LOADING);
// export const registerSuccess = createAction(REGISTER_SUCCESS);
// export const registerFailure = createAction(REGISTER_FAILURE);
//thunk 안에서만 쓰니까 export 필요없음
const registerLoading = createAction(REGISTER_LOADING);
const registerSuccess = createAction(REGISTER_SUCCESS);
const registerFailure = createAction(REGISTER_FAILURE);

//api호출하는 thunk
export const registerThunk = ({ username, password }) => async dispatch => {
  dispatch(registerLoading(true)); // 시작하기 전에 로딩상태를 트루로

  try {
    const { data } = await axios.post(
      "http://localhost:4000/api.v1.0/auth/register",
      {
        username,
        password
      }
    );

    dispatch(registerSuccess(data)); // dispatch 안에 next 들어있음
  } catch (e) {
    dispatch(registerFailure(e));
  }
};

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
    passowrdConfirm: ""
  },
  login: {
    username: "",
    password: ""
  }
};

//reducer //여기서 Thunk를 만들어 줘야 함.....
//액션 > 미들웨어 > 넥스트 > 리듀서...

// 레지스터에서 로딩중일때와 성공일때와 실패했을떄
export default handleActions(
  {
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
    [REGISTER_FAILURE]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload
    })
  },
  initialState
);
