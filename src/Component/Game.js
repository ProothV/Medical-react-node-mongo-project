import React, { useState, useEffect } from "react";
import "../Component/Game.css";

const Game = () => {
  const [score, setScore] = useState(0);
  const [capsulePosition, setCapsulePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (score === 10) alert("🎉 First Level Complete!");
    if (score === 20) alert("🏆 Second Level Complete!");
  }, [score]);

  const moveCapsule = (direction) => {
    setCapsulePosition((prev) => {
      let newPosition = { ...prev };
      if (direction === "up") newPosition.y -= 10;
      if (direction === "down") newPosition.y += 10;
      if (direction === "left") newPosition.x -= 10;
      if (direction === "right") newPosition.x += 10;
      return newPosition;
    });
  };

  const eatCapsule = () => setScore(score + 1);

  return (
    <div className="game-container">
      <h2>💊 Capsule Eating Game</h2>
      <p>Score: {score}</p>

      <div className="game-area">
        <div
          className="capsule"
          style={{ left: capsulePosition.x, top: capsulePosition.y }}
          onClick={eatCapsule}
        >
          💊
        </div>
      </div>

      <div className="controls">
        <button onClick={() => moveCapsule("up")}>⬆ Up</button>
        <button onClick={() => moveCapsule("left")}>⬅ Left</button>
        <button onClick={() => moveCapsule("right")}>➡ Right</button>
        <button onClick={() => moveCapsule("down")}>⬇ Down</button>
      </div>
    </div>
  );
};

export default Game;
