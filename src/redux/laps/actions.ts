import {
  ADD_LAP,
  DELETE_LAP,
  RESET_LAPS,
  LapsActionTypes,
} from '@redux/laps/types';

export const AddLap = (timestamp: number): LapsActionTypes => ({
  type: ADD_LAP,
  timestamp,
});

export const DeleteLap = (lapId: number): LapsActionTypes => ({
  type: DELETE_LAP,
  lapId,
});

export const ResetLaps = (): LapsActionTypes => ({
  type: RESET_LAPS,
});
