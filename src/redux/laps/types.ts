export interface LapsState {
  laps: Lap[];
}

export const ADD_LAP = 'ADD_LAP';
export const DELETE_LAP = 'DELETE_LAP';
export const RESET_LAPS = 'RESET_LAPS';

export interface AddLap {
  type: typeof ADD_LAP;
  timestamp: number;
}

export interface DeleteLap {
  type: typeof DELETE_LAP;
  lapId: number;
}

export interface ResetLaps {
  type: typeof RESET_LAPS;
}

export type LapsActionTypes = AddLap | DeleteLap | ResetLaps;
