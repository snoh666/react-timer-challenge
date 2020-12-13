import React from 'react';
import { useSelector } from 'react-redux';

import getLapsState from '@redux/laps/selector';
import Lap from '@components/Lap/Lap';

import { Wrapper, List, ListItem } from '@components/LapsList/LapsList.styled';

const LapsList: React.FC = () => {
  const { laps } = useSelector(getLapsState);
  return (
    <Wrapper>
      {laps?.length > 0 ? (
        <>
          <p>Laps: </p>
          <List>
            {laps.map((item: Lap, index) => (
              <ListItem key={item.id}>
                <Lap lap={item} index={index} />
              </ListItem>
            ))}
          </List>
        </>
      ) : null}
    </Wrapper>
  );
};

export default LapsList;
