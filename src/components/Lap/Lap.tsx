import React from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as DeleteIcon } from '@assets/delete.svg';
import TimeDisplay from '@components/TimeDisplay';
import { DeleteLap } from '@redux/laps/actions';
import Button from '@components/Button';

import { Wrapper, Title } from './Lap.styled';

interface Props {
  lap: Lap;
}

const Lap: React.FC<Props> = ({ lap }) => {
  const dispatch = useDispatch();

  const deleteLap = () => {
    dispatch(DeleteLap(lap.id));
  };

  return (
    <Wrapper>
      <Title>
        Lap&nbsp;
        <span>{lap.id + 1}</span>
        <span>:</span>
      </Title>
      <TimeDisplay time={lap.timestamp} />
      <Button type='button' onClick={deleteLap}>
        <span>
          <DeleteIcon />
        </span>
      </Button>
    </Wrapper>
  );
};

export default Lap;
