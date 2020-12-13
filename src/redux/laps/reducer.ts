import {
  ADD_LAP,
  DELETE_LAP,
  RESET_LAPS,
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
          {
            timestamp: action.timestamp,
            id: state.laps?.length
              ? state.laps[state.laps.length - 1].id + 1
              : 0,
          },
        ],
      };
    case DELETE_LAP:
      return {
        laps: [...state.laps.filter(({ id }) => id !== action.lapId)],
      };
    case RESET_LAPS:
      return {
        laps: [],
      };
    default:
      return state;
  }
};

export default lapsReducer;
