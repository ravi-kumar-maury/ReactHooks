import React, { useState } from "react";
let time = new Date().toLocaleTimeString();
//const [count , setCount] = useState(0);

function App(props) {
  const [count, setState] = useState(time);
  function UpdateTime() {
    setState(new Date().toLocaleTimeString());
  }
  function sayHi() {
    setState(new Date().toLocaleTimeString());
  }
  setInterval(sayHi, 1000);
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={UpdateTime}>Get Time</button>
    </div>
  );
}

export default App;
