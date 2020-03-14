### hooks ?

리액트 버전 16.8.0에서 나옴
Basic Hooks

- useState - 함수형일떄 씀 ☆ 오늘 배우는거
- useEffect - 스테이트 관리 ☆ 오늘 배우는거
- useContext -안씀..리덕스로 씀

Additional Hooks

- useReducer - useState로 커버가능
- useCallback - 함수형에서 씀. 핸들러함수만들때 이걸로 꼭 감싸줘야함. 안그러면 리렌더링될때마다 함수가 새로 생성됨
- useMemo - 얘로 감싸면 무거운 함수가 반환하는 값을 새로 받지 않음, 즉 함수를 실행하지 않는건가?
- useRef - 안쓴다고.....
- useImperativeHandle -안씀
- useLayoutEffect-안씀
- useDebugValue-안씀
