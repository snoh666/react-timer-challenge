import {
  ADD_LAP,
  DELETE_LAP,
  LapsActionTypes,
  LapsState,
} from '@redux/laps/types';

const initialState: LapsState = {
  laps: [],
};

const lapsReducer = (
  state: LapsState = initialState,
  action: LapsActionTypes
): LapsState => {
  switch (action.type) {
    case ADD_LAP:
      return {
        laps: [
          ...state.laps,
          { timestamp: action.timestamp, id: state.laps.length },
        ],
      };
    case DELETE_LAP:
      return {
        laps: [...state.laps.filter(({ id }) => id !== action.lapId)],
      };
    default:
      return state;
  }
};

export default lapsReducer;
