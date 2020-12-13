import React from 'react';
import { useSelector } from 'react-redux';

import getLapsState from '@redux/laps/selector';
import Lap from '@components/Lap/Lap';

const LapsList: React.FC = () => {
  const { laps } = useSelector(getLapsState);
  return (
    <div>
      <p>Laps list</p>
      {laps ? (
        <ul>
          {laps.map((item: Lap) => (
            <li>
              <Lap lap={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No laps available</p>
      )}
    </div>
  );
};

export default LapsList;
