import React, { Component } from "react";
import LeagueItem from "./LeagueItem";
import "./LeagueList.scss";

export const leagueTypes = [
  {
    league: "premier",
    league_name: "프리미어 리그",
    league_id: 148
  },
  {
    league: "laliga",
    league_name: "라리가",
    league_id: 468
  },
  {
    league: "serie",
    league_name: "세리에 A",
    league_id: 262
  },
  {
    league: "bundes",
    league_name: "분데스리가",
    league_id: 196
  },
  {
    league: "legue",
    league_name: "리그 앙",
    league_id: 176
  },
  {
    league: "champs",
    league_name: "챔피언스리그",
    league_id: 149
  }
];
class LeagueList extends Component {
  render() {
    const { leagueId, location, match, history } = this.props;
    return (
      <div>
        {
          <ul className="leagueList-wrapper">
            {leagueTypes.map(league => {
              return (
                <li key={league.league_id} className="leagueList">
                  <LeagueItem
                    league_name={league.league_name}
                    league={league.league}
                    selected={leagueId === league.league_id ? true : false}
                    league_id={league.league_id}
                    location={location}
                    history={history}
                    match={match}
                  />
                </li>
              );
            })}
          </ul>
        }
      </div>
    );
  }
}

export default LeagueList;
