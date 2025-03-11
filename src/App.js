import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState("Loading...");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((val) => {
        if (val == 100) {
          clearInterval(intervalId);
          return val;
        }
        return val + 1;
      });
    }, 100);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <center className="app">
      <div className="title">
        <span>Progress Bar</span>
      </div>
      <ProgressBar value={value} onComplete={() => setStatus("Completed")} />
      <span>{status}</span>
    </center>
  );
}
