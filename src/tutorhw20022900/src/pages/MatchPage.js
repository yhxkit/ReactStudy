import React, { Component } from "react";
import qs from "qs";

import MatchTemplate from "../components/MatchTemplate/MatchTemplate";
import MatchFinder from "../components/MatchFinder";
import Match from "../components/Match";

import leagueIdMapper from "../utils/leagueIdMapper";

class MatchPage extends Component {
  render() {
    const { match, location, history } = this.props;

    const { leagueName } = match.params;
    const range = qs.parse(location.search.substr(1));

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
        <Match range={range} leagueId={leagueId} />
      </MatchTemplate>
    );
  }
}

export default MatchPage;
