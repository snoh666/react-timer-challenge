import { RootState } from '@redux/reducers/root';
import { LapsState } from '@redux/laps/types';

const getLapsState = (state: RootState): LapsState => state.laps;

export default getLapsState;
