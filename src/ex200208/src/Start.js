import React, {Component} from 'react';

class Start extends Component {
    state = {
        input: ''
    }

    handleChange = (e) => {
        // e = onChange 이벤트 
        console.log(e.target);
        this.setState({
            input: e.target.value
        })
    }

    render(){
        // js 가 들어가는 곳
        return (
            // jsx 가 들어가는 곳. js는 {} 리터럴로 표현
            <div>
                <h3>Chapter 1) <strong>Start.js</strong> </h3>
                <br/>
                <input value='Hello React'/>
                <p>위의 input은 state 변경이 되지 않으므로 편집되지 않는다</p>
                <p>setState를 이용하여 편집 가능한 input을 생성해보자</p>
                <br/>

                <input value={this.state.input} onChange={this.handleChange} />
        <p>현재 인풋값은 : {this.state.input} 입니다</p>
            </div>
        )
    }

}

export default Start;