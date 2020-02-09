import React, {Component} from 'react';

class Practice1 extends Component{
    state = {
        username: '',
        password: '',
        list: []
    }

    id = 1; //맵 사용시 고유 key를 주기 위해 id 생성
    usernameFocus = React.createRef(); //pw 입력 후 엔터로 submit 할 수 있도록 ref생성
    

    handleChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        // 또는 비구조화 할당으로 하기와 같이 사용 가능
        const {name, value} = e.target;

        const update = {};
        update[name] = value;

        //this.setStete(update)
        // 또는 []를 사용하여 동적으로 name을 바꾸도록 하기와 같이 작성 가능
        this.setState({
            [name]: value
        })
    }

    handleInsert = (e) => {
        e.preventDefault(); //form의 submit 후 자동으로 새로고침 막기
        
        const {username, password, list} =this.state;
        this.setState({
            list: list.concat({username, password, id: this.id}),
            username: '',
            password: '',
            id: this.id
        })
        this.id = this.id + 1; // 고유값++
        this.usernameFocus.current.focus();
    }

    render(){
        return (
            <div>
                <h3>Chapter1-2) <strong>Practice1.js</strong></h3>
                <form onSubmit={this.handleInsert}>
                    <input name='username' value={this.state.username} onChange={this.handleChange} ref={this.usernameFocus}/>
                    <input name='password' value={this.state.password} onChange={this.handleChange} />
                    <button type='submit'>추가하기</button> 
                </form>
                <ul>
                    {this.state.list.map((item)=>{
                        return <li key={item.id}>{item.username}의 비번은 {item.password}</li>
                    })}
                </ul>
            </div>
        )
    }

}

export default Practice1