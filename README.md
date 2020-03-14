**1주차**

## Prerequisite

1. LTS Node(NVM>NPM>node.js)

###### 공식 사이트의 NPM으로 설치했더니 VScode terminal에서 yarn이 보안 오류를 일으키며 작동되지 않아, 삭제 후 NVM Window를 사용하여 재설치

2. yarn
3. create-react-app
4. git bash

###### VScode 터미널에서 window 기반의 powershell 대신 사용하기 위해서, 설정을 변경해둠

## Chapter 0

### 리액트?

- JS 친화적인 프론트엔드 라이브러리
- Mutation을 버리고 가상 DOM을 이용해 뷰를 새로 그려서 성능 최적화(불변성 = 상태 관리가 중요)
- state / props의 이해
- 컴포넌트의 집합: 재사용이 가능한 UI

### 클래스형 컴포넌트로 리액트와 친해져보기

- render(){} : 컴포넌트의 생김새를 정의
- 조건부 렌더링 : if else 가 아닌 삼항연산자 사용 / 조건 && YES

카운터 만들기  
[연습해보기- state/props/style](https://github.com/yhxkit/ReactStudy/tree/master/src/ex01)

## Chapter 1

입력값 리스트로 출력하기  
[연습해보기- map/concat](https://github.com/yhxkit/ReactStudy/tree/master/src/ex200208)

---

**2주차**

## Chapter 2

Chapter1의 리스트 삭제하기  
[연습해보기 - splice, slice, filter](https://github.com/yhxkit/ReactStudy/tree/master/src/ex200215)

## Chapter 3

컴포넌트 맛보기... 지금까지 만든 것 모듈화하여 TO DO LIST로 재구성해보기  
[연습해보기 - filter](https://github.com/yhxkit/ReactStudy/tree/master/src/ex20021502)

+Tip

- [더 편하게 state를 확인하기 위한 크롬 개발자 확장 도구](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)

- extension: 컴파일 전에 js의 문법을 오류를 체크해주는 eslint

- extension: 저장하면 자동으로 코드를 예쁘게 정렬해주는 prettier

---

**3주차**

## Chapter 4

immer : 불변성 유지를 쉽게 하기 위해 사용하는 라이브러리  
[연습해보기 - immer](https://github.com/yhxkit/ReactStudy/tree/master/src/ex20022201)

## Chapter 5

SASS : css를 효율적으로 관리하고 사용해보자  
[sass 참고 블로그](https://velog.io/@velopert/react-component-styling)  
[연습해보기 - sass](https://github.com/yhxkit/ReactStudy/tree/master/src/ex20022202)

## Chapter 6

[JSONPlaceholder](https://jsonplaceholder.typicode.com/) : 테스트용 백엔드 api를 이용해보자  
[연습해보기 - promise/axios](https://github.com/yhxkit/ReactStudy/tree/master/src/ex20022203)

---

**4주차**

## Chapter 7

[연습해보기 - async/await](https://github.com/yhxkit/ReactStudy/tree/master/src/ex20022900) : football match

## Chapter 8

[리액트라우터](https://github.com/yhxkit/ReactStudy/tree/master/src/ex20022901)

---

**5주차**

## Chapter 9

[리덕스](https://github.com/yhxkit/ReactStudy/tree/master/src/ex20030701)

---

**6주차**

## Chapter 10

[Middleware](https://github.com/yhxkit/ReactStudy/tree/master/src/ex20031401) : Redux-Thunk

## Chapter 11

[로그인/가입 화면](https://github.com/yhxkit/ReactStudy/tree/master/src/ex20031402)

## Chapter 12

[Hooks](https://github.com/yhxkit/ReactStudy/tree/master/src/ex20031403)
