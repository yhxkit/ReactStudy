import React, { useState, useEffect } from "react";

const App = () => {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);
  // return (
  //   <div>
  //     <h1>{count}</h1>
  //     <button
  //       onClick={() =>
  //         setCount(curval => {
  //           return { ...curval, count: curval.count + 1 };
  //         })
  //       }
  //     >
  //       increase
  //     </button>
  //     <h1>{count2}</h1>
  //     <button onClick={() => setCount2(count2 + 1)}>increase</button>
  //   </div>
  // );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // useEffect(() => {
  //   console.log("component did mount 와 update가 합쳐져있음");
  // }, [username]);

  useEffect(() => {
    console.log("component did mount 와 update가 합쳐져있음");
  });

  return (
    <div>
      <input value={username} onChange={e => setUsername(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} />
    </div>
  );
};

export default App;
