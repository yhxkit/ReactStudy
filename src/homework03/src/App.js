import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    data: null,
    //date: "",
    fortune: null
  };

  handleClickLotto = () => {
    axios.get("http://askat.me:8000/api/lotto").then(response => {
      this.setState({
        data: response.data
      });
    });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      date: value
    });
  };

  handleClickFortune = date => {
    const url = "http://askat.me:8000/api/fortune/" + date;
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.setState({
          fortune: response.data
        });
      })
      .catch(err => {
        console.log(err);
        alert("날짜값은 필수입니다");
      });
  };

  handleClickBad = () => {
    axios
      .get("http://askat.me:8000/api/bad")
      .then(response => {
        console.log(response.data);
        this.setState({
          data: [response.data]
        });
      })
      .catch(err => {
        console.log(err);
        alert("oops!");
      });
  };
  render() {
    const { fortune, data } = this.state;
    return (
      <div>
        <button onClick={this.handleClickLotto}>Lotto </button>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleClickFortune(this.state.date);
          }}
        >
          <input
            type="date"
            // value={this.state.date}
            onChange={this.handleChange}
            placeholder="yyyy-mm-dd"
          ></input>
          <button type="submit">Fortune</button>
        </form>
        <button onClick={this.handleClickBad}>Bad </button>

        <div>{fortune && fortune}</div>
        <div>
          {data &&
            this.state.data.map(item => {
              return <span key={item}>{item} </span>;
            })}
        </div>
      </div>
    );
  }
}

export default App;
