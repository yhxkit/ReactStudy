import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import Start from './Start';
import Practice1 from './Practice1';


//ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(<Start />, document.getElementById('startEx'));
ReactDOM.render(<Practice1 />, document.getElementById('practiceEx'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
