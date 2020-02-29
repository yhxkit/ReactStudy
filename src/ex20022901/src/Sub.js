import React from "react";
import qs from "qs";

const Sub = ({ location }) => {
  const query = qs.parse(location.search.substr(1)); // ? 를 빼주기 위해 1
  console.log(query);
  const info = query.info === "true"; // ?info=true 일때... 이때 쿼리스트링이기떄문에 true를 스트링 값으로 가져옴

  return (
    <div>
      <h3>Sub page</h3>
      {info && <div>추가 내용</div>}
    </div>
  );
};

export default Sub;
