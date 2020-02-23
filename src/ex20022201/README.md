**3주차-1**

## immer

- state 불변성 관리를 용이하게 하기 위해 사용
- 기존의 push 대신 concat, splice 대신 filter를 쓰던 부분에 신경쓰지 않아도 됨

> // immer 설치  
> yarn add immer
>
> // 불러오기  
> import produce from 'immer'

- 사용법(함수형으로 사용. this.setState(state => {}))

> this.setState(produce(draft => {  
>  draft.something.here.there.changeMe = 30;  
> }))

produce / draft 는 컨벤션적 용어로 사용함  
immer에서 default로 export 하고 있으므로, import produce가 아니라 import abc로 가져와 abc() 하더라도 상관없음...
