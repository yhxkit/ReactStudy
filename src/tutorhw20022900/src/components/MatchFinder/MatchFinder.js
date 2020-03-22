import React, { Component } from "react";
import Calendar from "./Calendar";
import League from "./League";

class MatchFinder extends Component {
  render() {
    const { leagueId, match, location, history } = this.props;

    return (
      <div>
        <League
          leagueId={leagueId}
          match={match}
          history={history}
          location={location}
        />
        <Calendar match={match} history={history} location={location} />
      </div>
    );
  }
}

export default MatchFinder;
