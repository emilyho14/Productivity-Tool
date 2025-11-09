import React, {useState, useEffect} from 'react';

function ProgressBarTimer() {
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [remainingTime, setRemainingTotalTime] = useState(0);

  const handleMinuteChange = (event) => {
    setMinutes(event.target.value);
  };

  const handleHourChange = (event) => {
    setHours(event.target.value);
  };

  const startButtonClick = () => {
    const h = parseInt(hours || 0, 10);
    const m = parseInt(minutes || 0, 10);
    const ms = Math.max(0, (h * 60 + m) * 60 * 1000);
    if (!ms) return;

    setTotalTime(ms);
    setRemainingTotalTime(ms);   // start at 0% elapsed
    setIsRunning(true);
  };

  const resetButtonClick = () => {
    setIsRunning(false);
    setTotalTime(0);
    setRemainingTotalTime(0);
  };

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setRemainingTotalTime((prev) => {
        const next = Math.max(0, prev - 100); // smoother bar
        if (next === 0) setIsRunning(false);
        return next;
      });
    }, 100);

    return () => clearInterval(id);
  }, [isRunning]);

  const elapsedPercent   = totalTime > 0 ? (1 - remainingTime / totalTime) * 100 : 0;
  const remainingPercent = totalTime > 0 ? (remainingTime / totalTime) * 100 : 0;
  const progress = totalTime > 0 ? ((1 - remainingTime / totalTime) * 100) : 0;

  const mmss = (ms) => {
    const sec = Math.ceil(ms / 1000);
    const mm = Math.floor(sec / 60);
    const ss = sec % 60;
    return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
  };

  return (
    <div className="timer-container">
      <div className="timer-controls">
        <h2 className="timer-title"> Timer! </h2>
        <input
          type="number"
          value={hours}
          onChange={handleHourChange}
          placeholder="Hours"
          min={0}
        />
        <input
          type="number"
          value={minutes}
          onChange={handleMinuteChange}
          placeholder="Minutes"
          min={0}
          max={59}
        />
        <button
          type="button"
          onClick={startButtonClick}
          className="start-button"
          disabled={isRunning}
        >
          Start Timer
        </button>
        <button
          type="button"
          onClick={resetButtonClick}
          className="reset-button"
        >
          Reset
        </button>
      </div>

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
        className="progress-bar"
        >
        <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }} // keep dynamic width inline
        />
        </div>

        <div className="progress-info">
            <span>{totalTime > 0 ? mmss(remainingTime) : "00:00"} remaining</span>
            <span>{progress.toFixed(1)}% done</span>
        </div>

    </div>
  );
}

export default ProgressBarTimer;
