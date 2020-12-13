import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as TimerIcon } from '@assets/timer.svg';
import { ReactComponent as PlayIcon } from '@assets/play_arrow.svg';
import { ReactComponent as PauseIcon } from '@assets/pause.svg';
import { ReactComponent as StopIcon } from '@assets/stop.svg';
import { ReactComponent as ResetIcon } from '@assets/loop.svg';
import { AddLap, ResetLaps } from '@redux/laps/actions';
import TimeDisplay from '@components/TimeDisplay';
import Button from '@components/Button';

import { Wrapper, Row } from './Stopwatch.styled';

const Stopwatch: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isRunning) return () => {};
    const intervalId = setInterval(() => {
      setCurrentTime(state => state + 1);
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const addTimestamp = () => {
    dispatch(AddLap(currentTime));
  };

  const stopTimer = () => {
    setIsRunning(false);
    setCurrentTime(0);
  };

  const resetTimer = () => {
    stopTimer();
    dispatch(ResetLaps());
  };

  return (
    <Wrapper>
      <div>
        <TimeDisplay time={currentTime} fontSize='2rem' />
      </div>
      <Row>
        <Button type='button' onClick={toggleTimer}>
          {isRunning ? <PauseIcon /> : <PlayIcon />}
        </Button>
        <Button type='button' onClick={() => addTimestamp()}>
          <TimerIcon />
        </Button>
        <Button type='button' onClick={() => stopTimer()}>
          <StopIcon />
        </Button>
        <Button type='button' onClick={() => resetTimer()}>
          <ResetIcon />
        </Button>
      </Row>
    </Wrapper>
  );
};

export default Stopwatch;
