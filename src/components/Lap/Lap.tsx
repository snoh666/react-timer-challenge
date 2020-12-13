import React from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as DeleteIcon } from '@assets/delete.svg';
import TimeDisplay from '@components/TimeDisplay';
import { DeleteLap } from '@redux/laps/actions';
import Button from '@components/Button';
import TwoDigitNumber from '@components/TwoDigitNumber';

import { Wrapper, Title } from './Lap.styled';

interface Props {
  lap: Lap;
  index: number;
}

const Lap: React.FC<Props> = ({ lap, index }) => {
  const dispatch = useDispatch();

  const deleteLap = () => {
    dispatch(DeleteLap(lap.id));
  };

  return (
    <Wrapper>
      <Wrapper>
        <Title>
          Lap&nbsp;
          <TwoDigitNumber value={index + 1} />
          <span>:</span>
        </Title>
        <TimeDisplay time={lap.timestamp} />
      </Wrapper>
      <Button type='button' onClick={deleteLap}>
        <span>
          <DeleteIcon />
        </span>
      </Button>
    </Wrapper>
  );
};

export default Lap;
