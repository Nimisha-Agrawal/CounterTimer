import React, { useState, useRef, useEffect } from "react";
import Button from "./components/Button";
import "./assets/css/style.css";

export default function App() {
  const [count, setCount] = useState(0);
  let intervalID = useRef(null);

  useEffect(() => {
    return resetTimer;
  }, []);

  const startTimer = () => {
    intervalID.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    intervalID.current && clearInterval(intervalID.current);
  };

  const resetTimer = () => {
    pauseTimer();
    setCount(0);
  };

  return (
    <div className="app">
      <div>
        <div class="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <Button
            title={count === 0 ? "Start" : "Pause"}
            action={count === 0 ? startTimer : pauseTimer}
          />
          <Button title={"Reset"} action={resetTimer} />
        </div>
      </div>
    </div>
  );
}
