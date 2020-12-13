import React from 'react';

interface Props {
  value: number;
}

const TwoDigitNumber: React.FC<Props> = ({ value }) => {
  return <span>{`${value}`.length > 1 ? value : `0${value}`}</span>;
};

export default TwoDigitNumber;
