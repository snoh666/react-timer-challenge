import React from 'react';
import styled from 'styled-components';
import TwoDigitNumber from '@components/TwoDigitNumber';

interface ParagraphProps {
  fontSize: string;
}

const Paragraph = styled.p<ParagraphProps>`
  font-size: ${({ fontSize }) => fontSize};
`;

interface Props {
  time: number;
  fontSize?: string;
}

const TimeDisplay: React.FC<Props> = ({ time, fontSize }) => {
  const ms = time % 100;
  const sec = Math.trunc(time / 100);
  const min = Math.trunc(time / 100 / 60);
  return (
    <Paragraph fontSize={fontSize || '0.75rem'}>
      <TwoDigitNumber value={min} />
      <span>:</span>
      <TwoDigitNumber value={sec} />
      <span>.</span>
      <TwoDigitNumber value={ms} />
    </Paragraph>
  );
};

export default TimeDisplay;
