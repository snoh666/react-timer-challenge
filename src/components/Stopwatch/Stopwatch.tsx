import React, { useEffect, useState } from 'react';

const Stopwatch: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(state => state + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Stopwatch component</h2>
      <p>Timer:</p>
      <p>{currentTime}</p>
    </div>
  );
};

export default Stopwatch;
