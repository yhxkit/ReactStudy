import React from "react";

import Main from "./Main";
import Sub from "./Sub";
import { Switch, Route, Link } from "react-router-dom";
import Profiles from "./Profiles";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">main으로</Link>
        </li>
        <li>
          <Link to="/sub">Sub로</Link>
        </li>
      </ul>
      <Switch>
        <Route exact component={Main} path="/" />
        <Route component={Sub} path="/sub" />
        <Route component={Profiles} path="/profiles" />

        <Route render={() => <div>404 없는 페이지임</div>} />
      </Switch>
    </div>
  );
};

export default App;
