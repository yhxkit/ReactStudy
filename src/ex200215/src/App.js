import React, { Component } from 'react';
class App extends Component {
	state = {
		username: '',
		password: '',
		list: []
	};
	id = 1;
	usernameInput = React.createRef();
	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		const { username, password } = this.state;
		this.setState({
			list: this.state.list.concat({
				username,
				password,
				id: this.id
			}),
			username: '',
			password: ''
		});
		this.id++;
		this.usernameInput.current.focus();
  };
  
  handleRemove = (id) => {
    // const index = this.state.list.findIndex(item => item.id === id);  //값이 id인 배열의인덱스찾기
    // const newList = this.state.list.slice(); //불변성 유지하여 복사...
    // newList.state.splice(index, 1); //splice는 불변성 유지하지 않음

    // this.setState({
    //   list: newList
    // })

    //하기와 같이 하면 훨씬 간편하다... filter 함수 사용
    const {list} = this.state;
    this.setState({
      list : list.filter(item=>item.id !== id)
    })
  }


	render() {
		const { username, password } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input name="username" value={username} onChange={this.handleChange} ref={this.usernameInput} />
					<input name="password" value={password} onChange={this.handleChange} />
					<button type="submit">insert</button>
				</form>
				<ul>
					{this.state.list.map(item => {
						return (
							<li key={item.id}>
								{item.username} - {item.password} 
                <button onClick={() => this.handleRemove(item.id)}>remove</button>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
export default App;