import React, { useRef, useState } from "react";

const Player = () => {
  const name = useRef();

  const [playerName, setplayerName] = useState("unknown entity");

  function handleClick() {
    setplayerName(name.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={name} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
