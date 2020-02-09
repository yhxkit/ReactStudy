import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Style from "./Style";
import State from "./State";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Style />, document.getElementById("styleex"));
ReactDOM.render(<State />, document.getElementById("stateex"));
