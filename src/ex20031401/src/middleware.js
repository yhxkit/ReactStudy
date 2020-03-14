const middleware = store => next => action => {
  //모든 미들웨어는 이렇게 생김. 미들웨어의 기본 구조

  console.log(store.getState());
  console.log(action);
  next(action); //여기서 디스패치 됨...스토어 값이 바뀜. 미들웨어에서 리듀서로 넘기는 부분
  console.log(store.getState());
};
export default middleware;
