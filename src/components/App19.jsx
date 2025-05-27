import { useState } from "react";

export default function CricketScoreboard() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [message, setMessage] = useState("");

  const handleRun = () => {
    if (wickets >= 10) {
      setMessage("Game Over!");
      return;
    }
    setRuns(runs + 1);
    setMessage("Well Done!");
  };

  const handleWicket = () => {
    if (wickets + 1 >= 10) {
      setWickets(10);
      setMessage("Game Over!");
    } else {
      setWickets(wickets + 1);
      setMessage("Better Luck Next Time!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🏏 Cricket Scoreboard 🏏</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", margin: "20px" }}>
        <div>
          <h2>{runs}</h2>
          <button onClick={handleRun}>Run</button>
        </div>
        <div>
          <h2>{wickets}</h2>
          <button onClick={handleWicket}>Wicket</button>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h2>{message}</h2>
      </div>
    </div>
  );
}
