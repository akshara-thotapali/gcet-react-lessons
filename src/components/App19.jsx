import { useEffect,useState } from "react";
import {useNavigate} from "react-router-dom";

export default function CricketScoreboard() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [message, setMessage] = useState("");
  const Navigate=useNavigate();
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
  
  const navtoApp1 = () => {
    Navigate("/")
  }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Cricket Scoreboard </h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", margin: "80px", backgroundColor:"violet"}}>
        <div style={{backgroundColor:"lightpink"}}>
          <h2>{runs}</h2>
          <button onClick={handleRun}>Run</button>
        </div>
        <div style={{backgroundColor:"lightpink"}}>
          <h2>{wickets}</h2>
          <button onClick={handleWicket}>Wicket</button>
        </div>
      </div>
      <div style={{ marginTop: "70px" }}>
        <h2>{message}</h2>
      </div>
      <p><button onClick={navtoApp1}>Got to App1</button></p>
    </div>
  );
}
