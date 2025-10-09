import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
    const [minutes, setMinutes] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning || timeLeft <= 0) {
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    const startTimer = () => {
        setTimeLeft(minutes * 60); // get time in seconds
        setIsRunning(true);
    }

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(0);
    }

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`
    };


    return (
        <div className="timer-container">
            <h2> Timer! </h2>

            <div> 
                <label> Select Time for Countdown: </label>
                <input
                    type="number"
                    value={minutes}
                    min="1"
                    onChange={(e) => setMinutes(Number(e.target.value))}
                    disabled={isRunning}
                />
                <button onClick={startTimer} disabled={isRunning}> Start </button>
                <button onClick={resetTimer}> Reset Timer</button>
            </div>

            {timeLeft > 0 && <h2>{formatTime(timeLeft)}</h2>}
            {timeLeft === 0 && isRunning && <h2> Time is Up!!! </h2>}
        </div>
    );
};

export default Timer;