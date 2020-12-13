import React from 'react';

import Basic from '@layouts/Basic';
import Stopwatch from '@components/Stopwatch';
import LapsList from '@components/LapsList';

const Main: React.FC = () => {
  return (
    <Basic>
      <Stopwatch />
      <LapsList />
    </Basic>
  );
};

export default Main;
