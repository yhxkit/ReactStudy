import React, { Component, Fragment } from "react";
import "./LeagueItem.scss";

class LeagueItem extends Component {
  handleClick = e => {
    e.preventDefault();

    const { history, match, location, league } = this.props;

    const url = match.path.replace(":leagueName", league);
    history.push(`${url}${location.search}`);
  };

  render() {
    const { league_name, selected } = this.props;

    return (
      <Fragment>
        <span
          className={`league ${selected && "selected"}`}
          onClick={this.handleClick}
        >
          {league_name}
        </span>
      </Fragment>
    );
  }
}

export default LeagueItem;
