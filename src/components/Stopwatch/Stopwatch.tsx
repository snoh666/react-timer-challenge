import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AddLap } from '@redux/laps/actions';
import TimeDisplay from '@components/TimeDisplay';

const Stopwatch: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(state => state + 1);
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const addTimestamp = () => {
    dispatch(AddLap(currentTime));
  };

  return (
    <div>
      <h2>Stopwatch component</h2>
      <p>Timer:</p>
      <div>
        <TimeDisplay time={currentTime} />
      </div>
      <button type='button' onClick={() => addTimestamp()}>
        Add Timestamp
      </button>
    </div>
  );
};

export default Stopwatch;
