import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import MatchPage from "../pages/MatchPage";

import Redirection from "../common/Redirection";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Redirection} />
          <Route path="/match/:leagueName" component={MatchPage}></Route>
          <Route render={() => <div>Wrong url</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
