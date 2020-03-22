import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

class Redirection extends Component {
  render() {
    const { pathname } = this.props.location;

    return (
      <div>
        {pathname === "/" && (
          <Redirect to="/match/premier?from=2020-02-01&to=2020-03-01" />
        )}
      </div>
    );
  }
}

export default withRouter(Redirection);
