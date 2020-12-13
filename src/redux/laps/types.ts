export interface LapsState {
  laps: Lap[];
}

export const ADD_LAP = 'ADD_LAP';
export const DELETE_LAP = 'DELETE_LAP';

export interface AddLap {
  type: typeof ADD_LAP;
  timestamp: number;
}

export interface DeleteLap {
  type: typeof DELETE_LAP;
  lapId: number;
}

export type LapsActionTypes = AddLap | DeleteLap;
