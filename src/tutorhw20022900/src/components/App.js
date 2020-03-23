import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MatchPage from "../pages/MatchPage";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/match/premier?from=2020-03-01&to=2020-03-10"></Redirect>
          </Route>
          <Route path="/match/:leagueName" component={MatchPage}></Route>
          <Route render={() => <div>Wrong url</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
