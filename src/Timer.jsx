import React, { useState, useEffect } from 'react';
import './index.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="timer-container">
      <div className="timer-box">
        <h1 className="timer-title">⏱ Timer</h1>
        <div className="timer-display">{seconds} s</div>
        <div className="timer-buttons">
          <button onClick={handleStart} className="btn btn-start">Start</button>
          <button onClick={handlePause} className="btn btn-pause">Pause</button>
          <button onClick={handleReset} className="btn btn-reset">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
