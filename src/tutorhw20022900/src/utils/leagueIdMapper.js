import { leagueTypes } from "../components/MatchFinder/League/LeagueList";

export default function leagueIdMapper(leagueName) {
  const leagueMaps = [...leagueTypes];

  const { league_id } = leagueMaps.find(l => {
    if (l.league === leagueName) {
      return l.league_id;
    } else {
      return null;
    }
  });
  return league_id;
}
