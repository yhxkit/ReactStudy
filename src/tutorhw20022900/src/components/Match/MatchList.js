import React, { Component } from "react";
import axios from "axios";
import Match from "./Match";

import qs from "qs";

class MatchList extends Component {
  state = {
    loading: false,
    data: null
  };
  getData = async (range, leagueId) => {
    try {
      this.setState({
        loading: true
      });
      const { from, to } = range;
      const extraQuery = `&from=${from}&to=${to}&league_id=${leagueId}`;

      const response = await axios.get(
        `https://apiv2.apifootball.com/?action=get_events${extraQuery}&APIkey=2da46e5ae4ffaa8725e414f884bdaae3670d4ace44c49c1d9419d7ee8652a921`
      );
      this.setState({
        data: response.data
      });
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
    this.setState({
      loading: false
    });
  };
  componentDidMount() {
    this.getData(
      qs.parse(this.props.location.search.substr(1)),
      this.props.leagueId
    );
  }

  componentDidUpdate(preProps, preState) {
    //리렌더링됐을때에도 데이터 호출

    if (
      this.props.range !== preProps.range ||
      this.props.leagueId !== preProps.leagueId
    ) {
      this.getData(
        qs.parse(this.props.location.search.substr(1)),
        this.props.leagueId
      );
    }
  }

  render() {
    const { loading, data } = this.state;

    return (
      <div>
        {loading && (
          <h3 style={{ textAlign: "center" }}>데이터를 불러오는 중입니다...</h3>
        )}
        {!loading &&
          data &&
          !data.error &&
          data.map(d => <Match key={d.match_id} data={d} />)}
      </div>
    );
  }
}
export default MatchList;
