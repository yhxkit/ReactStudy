import React from "react";
import Profile from "./Profile";
import { Route, Link } from "react-router-dom";
//여기가 서브 라우트... App.js가 메인 라우트
const Profiles = () => {
  return (
    <div>
      <h1>유저네임 리스트</h1>
      <ul>
        <li>
          <Link to="/profiles/kim">kim</Link>
        </li>
        <li>
          <Link to="/profiles/son">son</Link>
        </li>
      </ul>
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};
export default Profiles;
