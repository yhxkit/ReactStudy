import React, { Component } from "react";
import MatchTemplate from "./MatchTemplate/MatchTemplate";
import MatchFinder from "./MatchFinder";
import Match from "./Match";
import dateFormatter from "../utils/dateFormatter";

class App extends Component {
  // 바뀐 날짜를 부모인 app에서 관리. matchtemplate은 그냥 템플릿일 뿐이라 여기서

  state = {
    leagueId: 148,
    range: {
      startDate: "2020-01-01",
      endDate: "2020-02-01"
    }
  };

  handleRange = range => {
    const startDate = dateFormatter(range[0]);
    const endDate = dateFormatter(range[1]);
    this.setState({
      range: {
        startDate,
        endDate
      }
    });
  };

  handleLeagueId = leagueId => {
    this.setState({
      leagueId
    });
  };

  render() {
    const { leagueId, range } = this.state;
    return (
      <div>
        <MatchTemplate
          header={
            <MatchFinder
              setRange={this.handleRange}
              setLeagueId={this.handleLeagueId}
              leagueId={leagueId}
            />
          }
        >
          <Match range={range} leagueId={leagueId} />
        </MatchTemplate>
      </div>
    );
  }
}

export default App;
