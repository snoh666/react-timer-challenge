import React from 'react';
import TimeDisplay from '@components/TimeDisplay';

import { Wrapper, Title } from '@components/Lap/Lap.styled';

interface Props {
  lap: Lap;
}

const Lap: React.FC<Props> = ({ lap }) => {
  return (
    <Wrapper>
      <Title>
        Lap&nbsp;
        <span>{lap.id + 1}</span>
        <span>:</span>
      </Title>
      <TimeDisplay time={lap.timestamp} />
    </Wrapper>
  );
};

export default Lap;
