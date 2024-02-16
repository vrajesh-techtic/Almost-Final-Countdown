import Player from "./components/Player";

import "./App.css";

import React from "react";
import TimerChallenge from "./components/TimerChallenge";

const App = () => {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy"} targetTime={1} />
        <TimerChallenge title={"Not easy"} targetTime={5} />
        <TimerChallenge title={"Getting Tough"} targetTime={10} />
        <TimerChallenge title={"Pros Only"} targetTime={15} />
      </div>
    </>
  );
};

export default App;
