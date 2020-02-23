import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    data: null
  };

  handleClick = () => {
    //axios 는 프로미스기반이라 반환값이 promise라 바로 .then 사용 가능
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      console.log(response.data);
      this.setState({
        data: response.data
      });
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>데이터 불러오기 </button>
        <ul>
          {data &&
            this.state.data.map(item => {
              return <li key={item.id}>{item.title}</li>;
            })}
        </ul>
      </div>
    );
  }
}

export default App;
