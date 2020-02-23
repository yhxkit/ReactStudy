**2주차-2**

## Chapter 3

### 3-1. TodoList 컴포넌트 구조화하기

기본 레이아웃은 [여기서](https://github.com/react-nodejs-tutor/component-structurized-layout) 클론받아서 yarn 해서 노드모듈 init 하고 기능 코드 작성 진행

![Alt text](/src/csa.png)

상기와 같이 컴포넌트를 분리해보자

기존의 App.js에 모든 기능을 몰아넣던 상태에서, 다음과 같이 구조가 변경되면 컴포넌트들끼리 소통을 해야하므로, props를 사용하게 되고 어떤 props가 어디서 어디로 내려가야 하는지 고민해야 한다

- input state : createForm은 다른 컴포넌트에 영향을 주지만 받지는 않으므로 createForm에서 관리
- todos state : createForm에서 전달받게 됨. todoList에서 바로 받으면 될까?  
   -> 최상단 부모 컴포넌트(App.js)를 제외한 다른 컴포넌트들끼리 props를 교환하면 추후 컴포넌트 갯수가 많아졌을 때 구조가 복잡해짐  
   -> 그러니 부모 App.js를 거쳐서 props를 내려받자(이후에 Redux를 사용하게 되는 이유라고 함)  
   -> todos state는 App.js에 위치하게 되었다..!

  **주요 포인트**  
   : 왜 이런식으로 컴포넌트를 분리했는가?  
   -> 어떤 컴포넌트에서 어떤 내용을 state로 관리하고, 어떤 내용을 props로 내려주었는지 관계에 주목

+이벤트 버블링 / 이벤트 캡쳐링

- 버블링 : 요소에서 발생한 이벤트가 window까지 전파됨(상 -> 하)
- 캡쳐링 : window로부터 발생한 이벤트가 요소까지 전파됨(하 -> 상)
- event.stopPropagation() 으로 방지해주기

### 3-2. shouldComponentUpdate

부모 컴포넌트의 리렌더링이 이루어질 때에, 자식 컴포넌트는 변경사항이 없음에도 같이 리렌더링이 이루지면 효율성이 떨어지므로 shouldComponentUpdate 라이프사이클 api를 사용해보자
