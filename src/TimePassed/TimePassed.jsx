import React, { useState, useEffect } from 'react'

export default function TimePassed() {
    const [startTime, setStartTime] = useState(null);
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
        let interval;
        if (startTime) {
            interval = setInterval(() => {
                setElapsed(Math.floor((Date.now() - startTime) / 1000));
            }, 1000);
        }
        return () => clearInterval(intercal);
    }, [startTime]);

    const handleStart = () => {
        setStartTime(Date.now());
        setElapsed(0);
    };

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60*60));
        const minutes = Math.floor((seconds  % 3600)/ 60);
        const secs = seconds % 60;

        return `${hours > 0 ? hours + "hours " : ""}${minutes > 0 ? minutes + "minutes " : ""}${secs} seconds`;
    }

    return (
        <div>
            <h2> Time Elapsed</h2>
            <p> {formatTime(elapsed)} </p>
            <button
                onClick={handleStart}
            >
                Start
            </button>
        </div>
    )
};

