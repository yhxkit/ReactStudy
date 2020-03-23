import React, { Component } from "react";

import MatchTemplate from "../components/MatchTemplate/MatchTemplate";
import MatchFinder from "../components/MatchFinder";
import Match from "../components/Match";

import leagueIdMapper from "../utils/leagueIdMapper";

import { Route } from "react-router-dom";

class MatchPage extends Component {
  render() {
    const { match, location, history } = this.props;
    const { leagueName } = match.params;
    const leagueId = leagueIdMapper(leagueName);

    return (
      <MatchTemplate
        header={
          <MatchFinder
            match={match}
            location={location}
            history={history}
            leagueId={leagueId}
          />
        }
      >
        <Route
          path="/match/:leagueName"
          render={props => <Match {...props} leagueId={leagueId} />}
        ></Route>
      </MatchTemplate>
    );
  }
}

export default MatchPage;
