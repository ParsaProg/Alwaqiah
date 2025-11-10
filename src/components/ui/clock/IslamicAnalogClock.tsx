import "@/styles/analog_clock.css";
// AnalogClock.tsx
import React, { useEffect, useState } from "react";

const AnalogClock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

  return (
    <div className="outset-container">
      <div className="clock-container">
        <div className="clock">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="hour-mark"
              style={{ transform: `rotate(${i * 30}deg)` }}
            >
              <div
                className="hour-number"
                style={{ transform: `rotate(${-i * 30}deg)` }}
              >
                {i === 0 ? 12 : i}
              </div>
            </div>
          ))}

          <div
            className="hand hour-hand"
            style={{ transform: `rotate(${hourDegrees}deg)` }}
          />
          <div
            className="hand minute-hand"
            style={{ transform: `rotate(${minuteDegrees}deg)` }}
          />
          <div
            className="hand second-hand"
            style={{ transform: `rotate(${secondDegrees}deg)` }}
          />


          <div className="center-circle" />
        </div>
      </div>
    </div>
  );
};

export default AnalogClock;
