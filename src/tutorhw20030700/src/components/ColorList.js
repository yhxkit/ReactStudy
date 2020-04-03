import React, { Component } from "react";
import "./ColorList.css";

class ColorList extends Component {
  render() {
    const { input, list, changeInput, update, remove, insert } = this.props;

    return (
      <div>
        <form
          className="ColorList"
          onSubmit={e => {
            e.preventDefault();
            insert(input);
          }}
        >
          <input
            onChange={str => changeInput(str)}
            placeholder="원하는 색을 입력하세요"
          />
        </form>

        <div>
          <ul>
            {list.map(item => {
              return (
                <li key={item.id}>
                  {item.color}
                  <button onClick={() => remove(item.id)}>삭제</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ColorList;
