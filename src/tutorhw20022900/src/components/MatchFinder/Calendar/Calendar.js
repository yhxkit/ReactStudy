import React, { Component } from "react";
import ReactCalendar from "react-calendar";
import "./Calendar.scss";

import dateFormatter from "../../../utils/dateFormatter";

class Calendar extends Component {
  state = {
    date: null
  };
  handleChange = date => {
    this.setState({
      date
    });
  };
  handleSubmit = e => {
    // e.preventDefault();
    // this.props.setRange(this.state.date);

    e.preventDefault();

    const { date } = this.state;
    const from = dateFormatter(date[0]);
    const to = dateFormatter(date[1]);
    const { history, match } = this.props;

    history.push(`${match.url}?from=${from}&to=${to}`);
  };
  render() {
    return (
      <div className="calendar">
        <ReactCalendar
          className="react-calendar"
          onChange={this.handleChange}
          selectRange={true}
        />
        <button className="calender-button" onClick={this.handleSubmit}>
          검색
        </button>
      </div>
    );
  }
}
export default Calendar;
