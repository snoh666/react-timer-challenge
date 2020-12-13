import React from 'react';
import styled from 'styled-components';
import TwoDigitNumber from '@components/TwoDigitNumber';

const Paragraph = styled.p`
  font-size: 0.75rem;
`;

interface Props {
  time: number;
}

const TimeDisplay: React.FC<Props> = ({ time }) => {
  const ms = time % 100;
  const sec = Math.trunc(time / 100);
  const min = Math.trunc(time / 100 / 60);
  return (
    <Paragraph>
      <TwoDigitNumber value={min} />
      <span>:</span>
      <TwoDigitNumber value={sec} />
      <span>.</span>
      <TwoDigitNumber value={ms} />
    </Paragraph>
  );
};

export default TimeDisplay;
