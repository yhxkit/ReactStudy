import React, { Component } from "react"; //React는 default로 내보낸거, Component는 디폴트 아니라서 {}로 이름 맞춰서 받아와야 함
import "./styles.css";
import produce from "immer"; //immer에서 default로 내보내서 produce 라는 임의의 이름으로 받아도 상관 ㄴ.. produce라고 하는게 컨벤션

class App extends Component {
  id = 2;
  state = {
    input: "",
    todos: [
      {
        id: 1,
        text: "제목1",
        done: false
      },
      {
        id: 2,
        text: "제목2",
        done: false
      }
    ]
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };
  // handleInsert = () => {
  // this.setState({
  //
  // })
  // };

  //immer는 이렇게 produce()와 state를 draft로 가져옴. draft는 이제 불변성을 유지하므로 concat이 아닌 push 사용가능!.. draft란 이름도 컨벤션
  handleInsert = () => {
    this.setState(
      produce(draft => {
        console.log(draft);
        draft.todos.push({
          id: ++this.id,
          text: this.state.input,
          done: false
        });
        draft.input = "";
      })
    );
  };

  // 원래 방식
  // handleToggle = id => {
  //   this.setState({
  //      todos: this.state.todos.map(todo =>{
  //        if(todo.id === id){
  //          return{
  //            ...todo,
  //            done: !todo.todo
  //        }
  //       }else{
  //         return todo
  //       }
  //      })
  //    });
  // };

  //immer 사용
  handleToggle = id => {
    this.setState(
      produce(draft => {
        console.log(draft);
        const todo = draft.todos.find(todo => todo.id === id);
        todo.done = !todo.done;
      })
    );
  };

  //원래
  // handleRemove = id => {
  //   this.setState({
  //     todos: this.state.todos.filter(todo => todo.id !== id)
  //   });
  // };

  //immer 사용
  handleRemove = id => {
    this.setState(
      produce(draft => {
        console.log(id);
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1); // splice는 불변성 유지해주지 않음
      })
    );
  };

  render() {
    return (
      <div>
                   
        <div>
          <input value={this.state.input} onChange={this.handleChange} />
          <button onClick={this.handleInsert}>추가</button>
                          
        </div>
                        
        <ul>
                              
          {this.state.todos.map(todo => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.done ? "line-through" : "none"
              }}
              onClick={() => this.handleToggle(todo.id)}
              onContextMenu={e => {
                e.preventDefault();
                this.handleRemove(todo.id);
              }}
              //온 컨텍스트 메뉴로 우클릭 기능 이벤트 추가해보기~
            >
              {todo.text}                       
            </li>
          ))}
                          
        </ul>
                    
      </div>
    );
  }
}

export default App;
// default로 내보냈을때는 꼭 App이란 이름으로 안받아도 되고, 그냥 내보냈을때는 이름을 꼭 맞춰서 받아야 함
