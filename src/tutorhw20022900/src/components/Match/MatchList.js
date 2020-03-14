import React, { Component } from "react";
import axios from "axios";
import Match from "./Match";

class MatchList extends Component {
  state = {
    loading: false,
    data: null
  };
  getData = async () => {
    try {
      this.setState({
        loading: true
      });

      const { startDate, endDate } = this.props.range;
      const { leagueId } = this.props;
      const extraQuery = `&from=${startDate}&to=${endDate}&league_id=${leagueId}`;

      const response = await axios.get(
        `https://apiv2.apifootball.com/?action=get_events&${extraQuery}&APIkey=c79a8a099a531979e19be7cbfd865fb578513be437c93a258c4cf5e63eb12dcb`
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
    console.log("??");
    this.getData();
  }

  componentDidUpdate(preProps, preState) {
    //리렌더링됐을때에도 데이터 호출
    console.log("???");
    if (
      this.props.range !== preProps.range ||
      this.props.leagueId !== preProps.leagueId
    ) {
      this.getData();
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
